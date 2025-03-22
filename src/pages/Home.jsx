import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config-appwrite";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [featuredPosts, setFeaturedPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        // Only fetch posts if user is authenticated
        if (userData) {
            const fetchPosts = async () => {
                try {
                    setLoading(true)
                    const response = await appwriteService.getPosts()
                    if (response) {
                        const allPosts = response.documents
                        setFeaturedPosts(allPosts.slice(0, 2))
                        setPosts(allPosts.slice(2))
                    }
                } catch (err) {
                    console.error('Error fetching posts:', err)
                    setError('Failed to load posts. Please try again later.')
                } finally {
                    setLoading(false)
                }
            }
            fetchPosts()
        } else {
            // If no user, set loading to false
            setLoading(false)
        }
    }, [userData])

    // First check if user is not authenticated
    if (!userData) {
        return (
            <div className='w-full py-8 min-h-screen bg-gradient-to-br from-purple-900 to-blue-900'>
                <Container>
                    {/* Pre-login content */}
                    {/* Hero Section */}
                    {/* Hero Section with Parallax */}
                    <div className='relative h-[60vh] mb-16 overflow-hidden rounded-2xl'>
                        <div 
                            className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940")] bg-cover bg-center bg-fixed'
                            style={{ transform: 'translateZ(0)' }}
                        >
                            <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='relative h-full flex flex-col items-center justify-center text-center text-white p-8'
                        >
                            <h1 className='text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
                                Welcome to DevBlog
                            </h1>
                            <p className='text-xl mb-8 text-gray-200 max-w-2xl'>
                                Share your stories, ideas, and connect with others
                            </p>
                            <div className='flex justify-center gap-4'></div>
                        </motion.div>
                        </div>

                    {/* Welcome Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='mx-auto w-full max-w-4xl bg-blue-100/30 backdrop-blur-md rounded-xl p-10 border border-white/20 shadow-lg transition-all duration-200 hover:shadow-xl mb-16'
                    >
                        <h2 className='text-3xl font-bold text-white text-center mb-6'>Start Your Writing Journey</h2>
                        <p className='text-xl text-gray-200 text-center mb-8'>
                            Share your unique stories, experiences, and insights with the world.
                            Your personal blog is the perfect space to express yourself and connect with like-minded readers.
                        </p>
                        <div className='flex justify-center'>
                            <Link 
                                to='/signup'
                                className='inline-block px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors'
                            >
                                Start Your First Blog
                            </Link>
                        </div>
                    </motion.div>

                    {/* Featured Travel Stories */}
                    <div className='flex overflow-x-hidden relative'>
                        <div className='flex gap-8 animate-scroll-horizontal'>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                            >
                                <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop'
                                        alt='Santorini Sunset'
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                    />
                                </div>
                                <h2 className='text-2xl font-bold text-white mb-2'>Santorini Sunset</h2>
                                <p className='text-gray-200 mb-4'>Experience the breathtaking sunsets of Santorini, where the sky transforms into a canvas of vibrant colors over the Aegean Sea.</p>
                                <div className='flex items-center text-white/80'>
                                    <span className='mr-2'>🌅</span>
                                    Greece
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                            >
                                <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop'
                                        alt='Alpine Adventure'
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                    />
                                </div>
                                <h2 className='text-2xl font-bold text-white mb-2'>Alpine Adventure</h2>
                                <p className='text-gray-200 mb-4'>Discover the majestic Swiss Alps, where every trail leads to breathtaking views and unforgettable mountain experiences.</p>
                                <div className='flex items-center text-white/80'>
                                    <span className='mr-2'>🏔️</span>
                                    Switzerland
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                            >
                                <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2938&auto=format&fit=crop'
                                        alt='Kyoto Gardens'
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                    />
                                </div>
                                <h2 className='text-2xl font-bold text-white mb-2'>Kyoto Gardens</h2>
                                <p className='text-gray-200 mb-4'>Immerse yourself in the serene beauty of Kyoto's traditional gardens, where every stone and leaf tells a story of Japanese culture.</p>
                                <div className='flex items-center text-white/80'>
                                    <span className='mr-2'>🍁</span>
                                    Japan
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                            >
                                <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                    <img 
                                        src='https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop'
                                        alt='Bali Paradise'
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                    />
                                </div>
                                <h2 className='text-2xl font-bold text-white mb-2'>Bali Paradise</h2>
                                <p className='text-gray-200 mb-4'>Discover the enchanting beauty of Bali's rice terraces, ancient temples, and pristine beaches that create a perfect tropical escape.</p>
                                <div className='flex items-center text-white/80'>
                                    <span className='mr-2'>🌴</span>
                                    Indonesia
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='bg-blue-100/30 backdrop-blur-md rounded-xl p-10 text-center border border-white/20 mt-16'
                    >
                        <h2 className='text-3xl font-bold text-white mb-4'>Ready to Start Writing?</h2>
                        <p className='text-gray-200 mb-8 max-w-2xl mx-auto'>Join our community of writers and readers. Share your stories, engage with others, and be part of something special.</p>
                        <Link 
                            to='/signup'
                            className='inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors'
                        >
                            Create Your Account
                        </Link>
                    </motion.div>

                    {/* What You Can Share Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='mb-16'
                    >
                        <h2 className='text-4xl font-bold text-black dark:text-white text-center mb-12' style={{ lineHeight: 4.5 }}>What You Can Share</h2>
                        {/* Product Reviews */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop'
                                alt='Product Reviews'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Product Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share detailed reviews of the latest gadgets, home appliances, fashion items, or any other products. Include an honest breakdown of features, pros and cons, real-world performance, pricing, and whether it's worth buying. Adding comparison charts and user opinions can enhance credibility.</p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Personal Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Write about personal experiences, whether it's a life-changing moment, a professional journey, or an inspiring story. These can be success stories, lessons learned, challenges overcome, or even failures that provided valuable insights. Readers love authentic and relatable content.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop'
                                alt='Personal Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* News Updates */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2938&auto=format&fit=crop'
                                alt='News Updates'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>News Updates</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Keep your audience informed about the latest happenings in different industries like technology, entertainment, politics, business, and science. Provide insightful analysis, highlight key takeaways, and offer opinions on how these updates impact the world or daily life.</p>
                        </div>
                    </div>

                    {/* Travel Experience */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Travel Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share your travel experiences, from hidden gems to popular destinations. Include details about the culture, local food, must-visit places, budget tips, and travel hacks. High-quality images and travel itineraries can make your post more engaging.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2935&auto=format&fit=crop'
                                alt='Travel Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Food Recipes */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2940&auto=format&fit=crop'
                                alt='Food Recipes'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Food Recipes</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Provide step-by-step guides to delicious recipes, along with cooking tips, ingredient alternatives, and nutrition information. You can also include personal cooking experiences, food presentation techniques, and recommendations for pairing meals with beverages.</p>
                        </div>
                    </div>

                    {/* Fitness & Health */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Fitness & Health</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Offer expert-backed advice on workouts, nutrition, mental health, and lifestyle improvements. Provide fitness routines, diet plans, weight loss tips, and mindfulness techniques. You can also review health products, share success stories, and debunk fitness myths.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop'
                                alt='Fitness & Health'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Tech Review */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16 p-6 bg-white/5 rounded-xl'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
                                alt='Tech Review'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Tech Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Cover the latest innovations in smartphones, laptops, smart gadgets, AI tools, and software. Discuss features, performance, real-world usability, and value for money. Comparing multiple products and providing buying guides can make your reviews more helpful.</p>
                        </div>
                    </div>

                    {/* Educational Resources */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Educational Resources</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share informative content, study guides, online courses, learning strategies, and career advice. You can provide book summaries, coding tutorials, language-learning tips, and academic insights. The goal is to help readers gain knowledge and improve their skills.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop'
                                alt='Educational Resources'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>  
                    </motion.div>
                </Container>

                {/* Newsletter Subscription */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='bg-gradient-to-r from-sky-200 to-sky-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center shadow-xl'
                >
                    <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Stay Updated</h3>
                    <p className='text-gray-700 dark:text-gray-300 mb-6'>Subscribe to our newsletter for the latest updates and articles.</p>
                    <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                        <input 
                            type='email' 
                            placeholder='Enter your email'
                            className='flex-1 px-4 py-2 rounded-lg border border-sky-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-gray-700 text-black dark:text-white'
                        />
                        <button className='bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors'>
                            Subscribe
                        </button>
                    </div>
                </motion.div>

                {/* Community Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-16'
                >
                    <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Vibrant Community</h2>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {/* Community Stats */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>10K+</div>
                            <p className='text-xl text-gray-200'>Active Writers</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>50K+</div>
                            <p className='text-xl text-gray-200'>Published Stories</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>100K+</div>
                            <p className='text-xl text-gray-200'>Monthly Readers</p>
                        </motion.div>
                    </div>

                    {/* Testimonials */}
                    <div className='grid md:grid-cols-2 gap-8 mt-12'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-gray-200 mb-4'>"Traveling has opened my eyes to the beauty of different cultures, breathtaking landscapes, and unforgettable experiences. From hidden gems to famous landmarks, every journey holds a new adventure. Join me as I share my travel stories, tips, and must-visit destinations!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://media.licdn.com/dms/image/D5603AQFEQPbYLvXvxw/profile-displayphoto-shrink_400_400/0/1704341578394?e=1747267200&v=beta&t=Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5" 
                                    alt="Nithin Sai Krishna S"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-white font-semibold'>NITHIN SAI KRISHNA S</h3>
                                    <p className='text-gray-300'>Travel Blogger</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-gray-200 mb-4'>"After years of exploring flavors and experimenting in the recipes, I've discovered that food is more than just a meal—it's an experience. From street food adventures to homemade recipes, every dish tells a story. Join me as I share my culinary journey, delicious recipes, and hidden food gems!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://media.licdn.com/dms/image/D5603AQHxnFGPtXTu0g/profile-displayphoto-shrink_400_400/0/1704341578394?e=1747267200&v=beta&t=Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5" 
                                    alt="Vivek Kumar Pradhan"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-white font-semibold'>VIVEK KUMAR PRADHAN</h3>
                                    <p className='text-gray-300'>Foody Blogger</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* You Asked, We Answered Section */}
                    <div className='mt-16'>
                        <h3 className='text-3xl font-bold text-white text-center mb-8'>You Asked, We Answered</h3>
                        <div className='space-y-4 max-w-3xl mx-auto'>
                            {[
                                {
                                    question: "How do I get started with blogging?",
                                    answer: "Start by choosing a topic you're passionate about, create an account, and use our intuitive editor to write your first post. We provide templates and guidelines to help you structure your content effectively."
                                },
                                {
                                    question: "Can I monetize my blog posts?",
                                    answer: "Yes! Once you build an audience, you can monetize through various channels including sponsored posts, affiliate marketing, and premium content subscriptions. We provide tools and guidance to help you maximize your earning potential."
                                },
                                {
                                    question: "How often should I post new content?",
                                    answer: "Consistency is key. We recommend posting at least once a week to keep your audience engaged, but quality should always come before quantity. Find a sustainable posting schedule that works for you."
                                },
                                {
                                    question: "What makes a blog post successful?",
                                    answer: "Successful posts typically combine engaging content, clear writing, relevant images, and SEO best practices. Focus on providing value to your readers, use compelling headlines, and engage with your audience through comments."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-blue-100/10 backdrop-blur-md rounded-lg border border-white/10'
                                    initial={false}
                                >
                                    <button
                                        onClick={(e) => {
                                            e.currentTarget.setAttribute(
                                                'aria-expanded',
                                                e.currentTarget.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                                            );
                                            e.currentTarget.nextElementSibling.style.display = 
                                                e.currentTarget.nextElementSibling.style.display === 'block' ? 'none' : 'block';
                                        }}
                                        className='flex justify-between items-center w-full p-4 text-left text-white hover:bg-white/5 transition-colors rounded-lg'
                                        aria-expanded="false"
                                    >
                                        <span className='font-medium text-lg'>{faq.question}</span>
                                        <svg 
                                            className='w-6 h-6 transform transition-transform duration-200'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            style={{
                                                transform: 'rotate(0deg)',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        >
                                            <path 
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                                            />
                                        </svg>
                                    </button>
                                    <div 
                                        className='hidden p-4 pt-0 text-gray-300'
                                        style={{ display: 'none' }}
                                    >
                                        <p className='pt-4 border-t border-white/10'>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className='w-full py-8 min-h-screen bg-gradient-to-br from-sky-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200'>
            <Container>
                {/* Welcome Section for Logged In Users */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-12 text-center'
                >
                    <h1 className='text-4xl font-bold mb-4'>Welcome back, {userData.name}! 👋</h1>
                    <p className='text-lg text-gray-600 dark:text-gray-300'>Ready to explore new stories or share your own?</p>
                </motion.div>

                {/* Featured Posts Section */}
                {featuredPosts.length > 0 && (
                    <div className='mb-12'>
                        <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>Featured Posts</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {featuredPosts.map((post) => (
                                <motion.div 
                                    key={post.$id} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className='transition-all duration-300'
                                >
                                    <PostCard {...post} className='h-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden' />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Recent Posts Grid */}
                <div className='mb-12'>
                    <h2 className='text-2xl font-bold mb-6 text-black dark:text-white'>Recent Posts</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {posts.map((post, index) => (
                            <motion.div 
                                key={post.$id} 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className='transition-all duration-300'
                            >
                                <PostCard {...post} className='bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden' />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* What You Can Share Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-16'
                >
                    <h2 className='text-4xl font-bold text-black dark:text-white text-center mb-12'>What You Can Share</h2>
                    
                    {/* Product Reviews */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop'
                                alt='Product Reviews'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Product Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share detailed reviews of the latest gadgets, home appliances, fashion items, or any other products. Include an honest breakdown of features, pros and cons, real-world performance, pricing, and whether it's worth buying. Adding comparison charts and user opinions can enhance credibility.</p>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Personal Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Write about personal experiences, whether it's a life-changing moment, a professional journey, or an inspiring story. These can be success stories, lessons learned, challenges overcome, or even failures that provided valuable insights. Readers love authentic and relatable content.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop'
                                alt='Personal Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* News Updates */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2938&auto=format&fit=crop'
                                alt='News Updates'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>News Updates</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Keep your audience informed about the latest happenings in different industries like technology, entertainment, politics, business, and science. Provide insightful analysis, highlight key takeaways, and offer opinions on how these updates impact the world or daily life.</p>
                        </div>
                    </div>

                    {/* Travel Experience */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Travel Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share your travel experiences, from hidden gems to popular destinations. Include details about the culture, local food, must-visit places, budget tips, and travel hacks. High-quality images and travel itineraries can make your post more engaging.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2935&auto=format&fit=crop'
                                alt='Travel Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Food Recipes */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2940&auto=format&fit=crop'
                                alt='Food Recipes'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Food Recipes</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Provide step-by-step guides to delicious recipes, along with cooking tips, ingredient alternatives, and nutrition information. You can also include personal cooking experiences, food presentation techniques, and recommendations for pairing meals with beverages.</p>
                        </div>
                    </div>

                    {/* Fitness & Health */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Fitness & Health</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Offer expert-backed advice on workouts, nutrition, mental health, and lifestyle improvements. Provide fitness routines, diet plans, weight loss tips, and mindfulness techniques. You can also review health products, share success stories, and debunk fitness myths.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop'
                                alt='Fitness & Health'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>

                    {/* Tech Review */}
                    <div className='flex flex-col md:flex-row items-center gap-8 mb-16 p-6 bg-white/5 rounded-xl'>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
                                alt='Tech Review'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Tech Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Cover the latest innovations in smartphones, laptops, smart gadgets, AI tools, and software. Discuss features, performance, real-world usability, and value for money. Comparing multiple products and providing buying guides can make your reviews more helpful.</p>
                        </div>
                    </div>

                    {/* Educational Resources */}
                    <div className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-white'>Educational Resources</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share informative content, study guides, online courses, learning strategies, and career advice. You can provide book summaries, coding tutorials, language-learning tips, and academic insights. The goal is to help readers gain knowledge and improve their skills.</p>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img 
                                src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop'
                                alt='Educational Resources'
                                className='w-full h-64 object-cover rounded-xl shadow-lg'
                            />
                        </div>
                    </div>
                </motion.div>
                
                {/* What You Can Share Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-16'
                >
                    <h2 className='text-4xl font-bold text-black dark:text-white text-center mb-12'>Recent Posts</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {posts.map((post, index) => (
                            <motion.div 
                                key={post.$id} 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className='transition-all duration-300'
                            >
                                <PostCard {...post} className='bg-blue-100/30 backdrop-blur-md rounded-xl overflow-hidden border border-white/20' />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Community Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-16'
                >
                    <h2 className='text-4xl font-bold text-white text-center mb-12'>Our Vibrant Community</h2>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {/* Community Stats */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>10K+</div>
                            <p className='text-xl text-gray-200'>Active Writers</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>50K+</div>
                            <p className='text-xl text-gray-200'>Published Stories</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-white mb-2'>100K+</div>
                            <p className='text-xl text-gray-200'>Monthly Readers</p>
                        </motion.div>
                    </div>

                    {/* Testimonials */}
                    <div className='grid md:grid-cols-2 gap-8 mt-12'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-gray-200 mb-4'>"Traveling has opened my eyes to the beauty of different cultures, breathtaking landscapes, and unforgettable experiences. From hidden gems to famous landmarks, every journey holds a new adventure. Join me as I share my travel stories, tips, and must-visit destinations!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://media.licdn.com/dms/image/D5603AQFEQPbYLvXvxw/profile-displayphoto-shrink_400_400/0/1704341578394?e=1747267200&v=beta&t=Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5" 
                                    alt="Nithin Sai Krishna S"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-white font-semibold'>NITHIN SAI KRISHNA S</h3>
                                    <p className='text-gray-300'>Travel Blogger</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-gray-200 mb-4'>"After years of exploring flavors and experimenting in the recipes, I've discovered that food is more than just a meal—it's an experience. From street food adventures to homemade recipes, every dish tells a story. Join me as I share my culinary journey, delicious recipes, and hidden food gems!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://media.licdn.com/dms/image/D5603AQHxnFGPtXTu0g/profile-displayphoto-shrink_400_400/0/1704341578394?e=1747267200&v=beta&t=Ij0p_Gg5_Fy5-Ij0p_Gg5_Fy5" 
                                    alt="Vivek Kumar Pradhan"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-white font-semibold'>VIVEK KUMAR PRADHAN</h3>
                                    <p className='text-gray-300'>Foody Blogger</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* You Asked, We Answered Section */}
                    <div className='mt-16'>
                        <h3 className='text-3xl font-bold text-white text-center mb-8'>You Asked, We Answered</h3>
                        <div className='space-y-4 max-w-3xl mx-auto'>
                            {[
                                {
                                    question: "How do I get started with blogging?",
                                    answer: "Start by choosing a topic you're passionate about, create an account, and use our intuitive editor to write your first post. We provide templates and guidelines to help you structure your content effectively."
                                },
                                {
                                    question: "Can I monetize my blog posts?",
                                    answer: "Yes! Once you build an audience, you can monetize through various channels including sponsored posts, affiliate marketing, and premium content subscriptions. We provide tools and guidance to help you maximize your earning potential."
                                },
                                {
                                    question: "How often should I post new content?",
                                    answer: "Consistency is key. We recommend posting at least once a week to keep your audience engaged, but quality should always come before quantity. Find a sustainable posting schedule that works for you."
                                },
                                {
                                    question: "What makes a blog post successful?",
                                    answer: "Successful posts typically combine engaging content, clear writing, relevant images, and SEO best practices. Focus on providing value to your readers, use compelling headlines, and engage with your audience through comments."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className='bg-blue-100/10 backdrop-blur-md rounded-lg border border-white/10'
                                    initial={false}
                                >
                                    <button
                                        onClick={(e) => {
                                            e.currentTarget.setAttribute(
                                                'aria-expanded',
                                                e.currentTarget.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                                            );
                                            e.currentTarget.nextElementSibling.style.display = 
                                                e.currentTarget.nextElementSibling.style.display === 'block' ? 'none' : 'block';
                                        }}
                                        className='flex justify-between items-center w-full p-4 text-left text-white hover:bg-white/5 transition-colors rounded-lg'
                                        aria-expanded="false"
                                    >
                                        <span className='font-medium text-lg'>{faq.question}</span>
                                        <svg 
                                            className='w-6 h-6 transform transition-transform duration-200'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            style={{
                                                transform: 'rotate(0deg)',
                                                transition: 'transform 0.2s ease'
                                            }}
                                        >
                                            <path 
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                                            />
                                        </svg>
                                    </button>
                                    <div 
                                        className='hidden p-4 pt-0 text-gray-300'
                                        style={{ display: 'none' }}
                                    >
                                        <p className='pt-4 border-t border-white/10'>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default Home
