import service from '../appwrite/config-appwrite';
import { Container, PostCard } from '../components/index';
import { useState, useEffect } from 'react';
import React from 'react';
import { FiSearch, FiCalendar, FiType } from 'react-icons/fi';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('date')
    const postsPerPage = 8

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const response = await service.getPosts()
                if (response) {
                    setPosts(response.documents)
                }
            } catch (err) {
                console.error('Error fetching posts:', err)
                setError('Failed to load posts. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [page])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.$createdAt) - new Date(a.$createdAt)
        } else {
            return a.title.localeCompare(b.title)
        }
    })

    const paginatedPosts = sortedPosts.slice((page - 1) * postsPerPage, page * postsPerPage)
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage)

    if (loading) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className='w-full bg-gray-800 rounded-lg p-4 animate-pulse'>
                                <div className='h-48 bg-gray-700 rounded-lg mb-4'></div>
                                <div className='h-4 bg-gray-700 rounded w-3/4 mb-2'></div>
                                <div className='h-4 bg-gray-700 rounded w-1/2'></div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }

    if (error) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='text-center text-red-500'>{error}</div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='mb-8 flex flex-col md:flex-row gap-4 items-center justify-between'>
                    <div className='relative w-full md:w-96'>
                        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type='text'
                            placeholder='Search posts...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => setSortBy('date')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${sortBy === 'date' ? 'bg-blue-500' : 'bg-gray-800'}`}
                        >
                            <FiCalendar /> Date
                        </button>
                        <button
                            onClick={() => setSortBy('title')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${sortBy === 'title' ? 'bg-blue-500' : 'bg-gray-800'}`}
                        >
                            <FiType /> Title
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {paginatedPosts.map((post) => (
                        <div key={post.$id} className='w-full'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className='flex flex-wrap justify-center items-center mt-8 gap-2'>
                        <button
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className='px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed'
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPage(index + 1)}
                                className={`w-10 h-10 rounded-lg transition-colors ${page === index + 1 ? 'bg-blue-500' : 'bg-gray-800 hover:bg-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            className='px-4 py-2 bg-blue-500 text-white rounded-lg transition-colors hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed'
                        >
                            Next
                        </button>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts