import { Container, PostCard, PostForm } from '../components/index';
import { useState, useEffect } from 'react';
import React from 'react';
import { FiSearch, FiCalendar, FiType } from 'react-icons/fi';
import { motion } from 'framer-motion';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('date')
    const postsPerPage = 8

    useEffect(() => {
        try {
            setLoading(true)
            // Get stored posts and mock posts
            const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]')
            const mockPosts = [
                {
                    id: '1',
                    title: 'Is the Stock Market Open on Christmas Eve? – Timothy Sykes',
                    content: "As the holiday season arrives, traders are looking for the best present their is — the Santa Claus rally! If you want to take advantage of it, understanding the stock market holiday schedule is crucial.\n\nHere's a breakdown of holiday trading hours, strategies, and what to watch this week.\n\nStock Market Holiday Hours for Christmas Eve and Christmas Day 2024\nThe hours of operation for U.S. markets change significantly around major holidays like Christmas. Here's what to expect this year:\n\nChristmas Eve (Tuesday, December 24):\n\nThe NYSE and Nasdaq will close early at 1 p.m. Eastern Time.\nThe bond market observes a slightly later closure at 2 p.m. ET.\nChristmas Day (Wednesday, December 25):\n\nAll major U.S. stock exchanges and bond trading platforms will be closed in observance of the holiday.\nTrading resumes during regular trading hours on Thursday, December 26.\n\nFor those keeping an eye on global markets, note that some foreign stock exchanges may follow different schedules. Be sure to check the full list of stock market holidays for your region.",
                    featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQGD_HMND4c0DA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734979827936?e=2147483647&v=beta&t=I5KyaibUUcJ_r-RjBKhs-bKyRsOjTo0rOarPm2MkZuo',
                    createdAt: new Date().toISOString()
                },
                {
                    id: '2',
                    title: 'SOUN Leads 3 AI Stocks to Watch in Dec. 2024 – Timothy Sykes',
                    content: "Artificial intelligence (AI) remains one of the most dynamic sectors, offering both innovation and investment opportunities. While giants like NVIDIA dominate headlines, smaller players in the AI space—penny stocks with rapid growth potential—are turning heads. Let's take a closer look at three standout stocks making waves this December.\n\nTop 3 AI Stocks to Watch for December 2024\nMy top AI penny stock picks are:\n\nNASDAQ: SOUN — SoundHound AI Inc — The Voice AI Leader Trading at 52-Week Highs\nNASDAQ: GXAI — Gaxos.AI Inc — Simplifying AI for Game Development\nNASDAQ: SERV — Serve Robotics Inc — Nvidia's Last-Mile Delivery Partner\n\n1. SoundHound AI Inc (NASDAQ: SOUN): The Voice AI Leader Trading at 52-Week Highs\nSoundHound AI has been a key player in the voice recognition space, earning recognition for its consistent growth and sector leadership. Its Q3 2024 earnings were a testament to its momentum, with revenue surging 89% year-over-year to $25 million.\n\nWhat Sets SOUN Apart:\n- Strategic Backing: With NVIDIA holding shares, SoundHound continues to build credibility in the tech sector.\n- Strong Financials: Record-breaking earnings and solid partnerships, including its \"Hey Kia\" rollout in India, are driving the company's upward trajectory.\n- Technical Setup: Trading near $15, SOUN is consolidating around key resistance levels, positioning itself for a breakout.",
                    featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQH_pXQkl0AYlg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733849769293?e=2147483647&v=beta&t=Qq93aZ8fUJ4C-__y0Uu5pO7D7HDbjJ-0wzWKiFjk8vI',
                    createdAt: new Date().toISOString()
                },
                {
                    id: '3',
                    title: 'The Top Quantum Computing Stocks To Watch – Timothy Sykes',
                    content: "Quantum computing and artificial intelligence (AI) are the two most explosive sectors in tech right now. What's more, quantum computing may be the next big driver of AI's growth. With AI's relentless demand for processing power, quantum technology is emerging as a potential solution to train complex models faster and more efficiently.\n\nCheck out my AI penny stock watchlist here!\nFor traders, this is creating massive opportunities. Quantum computing penny stocks—low-priced equities tied to this cutting-edge technology—are gaining momentum. These stocks thrive on speculation, news catalysts, and partnerships with industry leaders. And real news like Amazon's entry into quantum computing continues to send these stocks even higher. Their high volatility makes them ideal for short-term trading, but they also demand preparation and a disciplined approach.\n\nHere's a breakdown of five quantum computing penny stocks showing major potential right now.\n\n1. Quantum Computing Inc. (NASDAQ: QUBT): Riding the Quantum-AI Hype\nWhy It's Hot: QUBT is one of the year's top performers, up 715%* year-to-date. This stock spiked 560%* in November after announcing its first order from its TFLN photonic chip foundry, a crucial step in advancing quantum computing applications. With its low float and high volatility, QUBT rewards prepared traders.\n\nWhat to Watch: Support sits around $6. Watch for dip-buy setups if the stock consolidates or breakout trades if new catalysts hit. QUBT's ability to spike on news makes it a prime candidate for short-term trades.",
                    featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQH806mX8WIDFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733474936439?e=2147483647&v=beta&t=0YLsNFIf0EDNPoYO6nu_alatzAlcra3D172_AUlFCnU',
                    createdAt: new Date().toISOString()
                },
                {
                    id: '4',
                    title: '3 Crypto Penny Stocks to Watch as Bitcoin Nears $100K – Timothy Sykes',
                    content: "Bitcoin's unprecedented climb toward $100,000 is making waves across markets, driving immense volatility in crypto-linked penny stocks. With Bitcoin-friendly policies hinted at by Donald Trump and blockchain stocks surging alongside crypto's rally, traders are seeking the next breakout opportunities.\n\nHere are three crypto penny stocks worth watching closely as Bitcoin approaches this historic milestone.\n\n1. Bluesky Digital Assets (OTCQB: BTCWF)\nWhere AI Meets Blockchain\n\nBluesky Digital Assets is gearing up for its January 2025 launch of the AI-powered BlueskyINTEL Web Engagement Platform (WEP). This platform connects businesses with blockchain and AI tech providers and has already drawn interest from Amazon AWS during its soft launch.\n\nWhy Watch BTCWF?\n- Revenue generation is set to start in January 2025.\n- Strategic partnerships, including interest from Amazon AWS, position it for strong growth.\n\nTrading Insight: Bitcoin's rally could lift BTCWF as a sympathy play. Focus on support levels and prepare for volatility given its pre-revenue status.\n\n2. BTC Digital Ltd. (NASDAQ: BTCT)\nBitcoin Mining Meets Meme-Stock Mania\n\nBTC Digital soared 316% in one day last week, showcasing extreme volatility. As a Bitcoin miner with a market cap of just $42 million, BTCT is highly reactive to Bitcoin's moves, making it a prime momentum play.",
                    featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQF12Fk9NH74rQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732208903150?e=2147483647&v=beta&t=gld5NSO9pALaHXkuakzmLC0AJbKvCdn-pJT5BrEfFvI',
                    createdAt: new Date().toISOString()
                }
            ]
            
            // Combine stored posts with mock posts
            const allPosts = [...storedPosts, ...mockPosts]
            setPosts(allPosts)
            setLoading(false)
        } catch (err) {
            console.error('Error loading posts:', err)
            setError('Failed to load posts. Please try again later.')
            setLoading(false)
        }
    }, [])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.createdAt) - new Date(a.createdAt)
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
        <div className='w-full py-8 min-h-screen bg-gradient-to-br from-gray-400 via-gray-300 to-gray-300'>
            <Container>
                <div className='mb-8 flex flex-col md:flex-row gap-4 items-center justify-between'>
                    <div className='relative w-full md:w-96'>
                        <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        <input
                            type='text'
                            placeholder='Search posts...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full pl-10 pr-4 py-2 bg-gray-100 hover:bg-blue-200 focus:bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                        />
                    </div>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => setSortBy('date')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${sortBy === 'date' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-white hover:text-gray-800'}`}
                        >
                            <FiCalendar /> Date
                        </button>
                        <button
                            onClick={() => setSortBy('title')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${sortBy === 'title' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-white hover:text-gray-800'}`}
                        >
                            <FiType /> Title
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {paginatedPosts.map((post) => (
                        <motion.div 
                        key={post.id} 
                        className='w-full'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <PostCard {...post} />
                    </motion.div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className='flex flex-wrap justify-center items-center mt-8 gap-2'>
                        <button
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className='px-4 py-2 bg-blue-500 text-black rounded-lg transition-colors hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed'
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
                            className='px-4 py-2 bg-blue-500 text-black rounded-lg transition-colors hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed'
                        >
                            Next
                        </button>
                    </div>
                )}
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <h2 className="text-2xl font-bold mb-6">Add New Post</h2>
                    <PostForm />
                </div>
            </Container>
        </div>
    )
}

export default AllPosts