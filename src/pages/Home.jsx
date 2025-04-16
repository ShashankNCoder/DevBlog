import React, { useEffect, useState } from 'react';
import { Container, PostCard, CategoryContent } from '../components';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQSection from './faq.jsx';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [featuredPosts, setFeaturedPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('city')
    const userData = useSelector((state) => state.auth.userData)

    useEffect(() => {
        try {
            setLoading(true)
            const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]')
            setFeaturedPosts(storedPosts.slice(0, 2))
            setPosts(storedPosts.slice(2))
            setLoading(false)
        } catch (err) {
            console.error('Error loading posts:', err)
            setError('Failed to load posts. Please try again later.')
            setLoading(false)
        }
    }, [])
    if (!userData || userData) {
        return (
            <div className='w-full py-8 min-h-screen bg-gradient-to-br from-gray-400 via-gray-300 to-gray-300'>
                <div className="bg-[url('https://www.gifcen.com/wp-content/uploads/2021/08/laptop.gif')] bg-fixed bg-cover bg-center h-[85vh] relative mt-[-30px] mb-10">
                
                <button 
                            onClick={() => {
                                window.scrollBy({
                                    top: 300,
                                    behavior: 'smooth'
                                });
                            }} 
                            className="animate-bounce bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors duration-300 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer" 
                            aria-label="Scroll down">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-white">
                                <path d="M12 5v14M5 12l7 7 7-7"></path>
                            </svg>
                        </button>     
                        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/90 via-black/50 to-transparent text-[#1e293b] leading-6 z-10">
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className='relative z-10 h-full flex flex-col justify-center text-left pl-16 p-0'
                    >
                        <div className="absolute right-12 top-12 w-[400px] bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-xl transition-all duration-300 transform group cursor-pointer" style={{ perspective: '1000px', transition: 'transform 0.3s ease' }}
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }}
>
                            <div className="flex items-center gap-3 mb-4">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-200" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Felix Chen</h3>
                                    <p className="text-sm text-gray-600">Posted 2 hours ago</p>
                                </div>
                            </div>
                            <div className="mb-4 rounded-lg overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2874" alt="Office Setup" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <p className="text-gray-700 mb-4">Just upgraded my workspace setup! 💻✨ Ready for another productive coding session. What's your ideal workspace like? #DeveloperLife #WorkspaceSetup</p>
                            <div className="flex items-center justify-between text-gray-600 group-hover:text-gray-800 transition-colors">
                                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span>2.5k</span>
                                </button>
                                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                    <span>128</span>
                                </button>
                                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                    <motion.div 
                initial={{ y: -100, opacity: 0, rotateX: 90 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: 0.2
                  }
                }}
                className='mb-6 flex justify-start'
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className='text-white'
                    
                  >
                    <path 
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M22 6L12 13L2 6" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
            </motion.div>
                
              <h1 className='text-[60px] font-[700] mb-[24px] tracking-[-1.5px] leading-[60px] text-white font-circular bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
                            <span className='[text-shadow:2px_4px_8px_rgba(0,0,0,0.6)] text-left'> Stories worth living </span><br/>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent italic">moments</span> worth sharing
                        </h1>
                        
                        <div className='flex flex-col items-start'>
                            <p className='font-circular text-[20px] leading-[28px] mb-[32px] text-[#fff] max-w-2xl [text-shadow:1px_2px_4px_rgba(0,0,0,0.4)] text-left ml-0'>
                                Share your stories, ideas, and connect with others
                            </p>
                            <Link
                                to="/all-posts"
                                className='bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transform active:scale-95'>
                                Start Your First Blog
                            </Link>
                        </div>
                            
                    </motion.div>
                </div>
                
                
                <div className="flex items-center gap-2 text-[#333] pl-4">
  <div className="flex -space-x-2">
    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
      <img src="https://api.dicebear.com/7.x/bottts/svg?seed=bot1" alt="avatar" className="w-full h-full object-cover" />
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
      <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=hero1" alt="avatar" className="w-full h-full object-cover" />
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
      <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=pixel1" alt="avatar" className="w-full h-full object-cover" />
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
      <img src="https://api.dicebear.com/7.x/micah/svg?seed=micah1" alt="avatar" className="w-full h-full object-cover" />
    </div>
    <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden">
      <img src="https://api.dicebear.com/7.x/notionists/svg?seed=notion1" alt="avatar" className="w-full h-full object-cover" />
    </div>
  </div>
  <p className="text-sm font-semibold">
    Join with our <span className="font-bold text-blue-500">100k+</span> active readers!
  </p>
</div>


<div className="mx-auto px-4 md:px-0 mb-0 mt-8">
<motion.h2 
    className="text-3xl font-serif font-bold mb-4 text-center text-blue-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
>
    Learn From Our WRITERS!
</motion.h2>
<motion.a 
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-blue-500 relative group text-center block mx-auto pb-1" 
    style={{ left: "-2px", top: "-20px" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8 }}
>
    Discover tips, stories, and insights from passionate writers who turn ideas into inspiration.
</motion.a>
    <div className="flex items-center gap-10 overflow-x-auto pb-4 md:justify-center scrollbar-hide">
        <button 
            onClick={() => setSelectedCategory('cooking')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'cooking' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">🧑‍🍳</span>
            <span className="font-medium">Cooking</span>
        </button>
        <button 
            onClick={() => setSelectedCategory('coding')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'coding' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">👨‍💻</span>
            <span className="font-medium">Coding</span>
        </button>
        <button 
            onClick={() => setSelectedCategory('sports')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'sports' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">🚴🏻</span>
            <span className="font-medium">Sports</span>
        </button>
        <button 
            onClick={() => setSelectedCategory('technology')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'technology' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">👩🏻‍💻</span>
            <span className="font-medium">Technology</span>
        </button>
        <button 
            onClick={() => setSelectedCategory('events')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'events' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">🎪</span>
            <span className="font-medium">Events</span>
        </button>
        <button 
            onClick={() => setSelectedCategory('life')}
            className={`flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full transition-all duration-300 ${selectedCategory === 'life' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-white hover:bg-black/10 text-[var(--color-neutral-700)] shadow-sm hover:shadow-md'}`}>
            <span className="text-xl">🌊</span>
            <span className="font-medium">Life</span>
        </button>
    </div>
    <CategoryContent category={selectedCategory} />
</div>
                    {/* Welcome Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className='relative z-10 h-full flex flex-col justify-center text-left pl-10 p-0 scroll-mt-14'
                        id="start-writing-section"
                    >
                        <h2 className='text-3xl font-bold text-blue-700 text-center mb-6 font-["Georgia"]'>Start Your Writing Journey</h2> 
                        <p className="text-gray-600 text-center mb-4" style={{position: "relative", left: "-6px", top: "-27px"}}>No Ending For Writing</p>
                    </motion.div>
                    <Container>
                    {/* Featured Travel Stories */}
                    <div className='flex overflow-x-hidden relative scrollbar-hide' style={{ 
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        '::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}>
                        <div className='flex gap-8 animate-scroll-horizontal' style={{ animation: 'scroll 20s linear infinite' }}>
                            <React.Fragment>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8 }}
                                    className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-6 border border-Black/20'
                                >
                                    {/* Santorini card content */}
                                    <div className='mb-4 h-40 rounded-lg overflow-hidden'>
                                        <img 
                                            src='https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2940&auto=format&fit=crop'
                                            alt='Santorini Sunset'
                                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                        />
                                    </div>
                                    <h2 className='text-2xl font-bold text-lime-900 mb-2'>Santorini Sunset</h2>
                                    <p className='text-blue-grey-700 mb-4'>Experience the breathtaking sunsets of Santorini, where the sky transforms into a canvas of vibrant colors over the Aegean Sea.</p>
                                    <h1 className="heading-xl mb-6 text-[#1A1A1A] font-bold font-manga-title tracking-wide">
                                        <span className='mr-2'>🌅</span><span className="text-[#e040fb]" data-metatip="true">Greece</span>
                                    </h1>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.8 }}
                                    className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-Black/20'
                                >
                                    {/* Alpine card content */}
                                    <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                        <img 
                                            src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop'
                                            alt='Alpine Adventure'
                                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                        />
                                    </div>
                                    <h2 className='text-2xl font-bold text-green-600 mb-2'>Alpine Adventure</h2>
                                    <p className='text-blue-grey-700 mb-4'>Discover the majestic Swiss Alps, where every trail leads to breathtaking views and unforgettable mountain experiences.</p>
                                    <h1 className="heading-xl mb-6 text-[#1A1A1A] font-bold font-manga-title tracking-wide">
                                    <span className='mr-2'>🏔️</span><span className="text-[#40c4ff]" data-metatip="true">Switzerland</span>
                                    </h1>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2.8, delay: 1.2 }}
                                    className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-Black/20'
                                >
                                    {/* Kyoto card content */}
                                    <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                        <img 
                                            src='https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2938&auto=format&fit=crop'
                                            alt='Kyoto Gardens'
                                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                        />
                                    </div>
                                    <h2 className='text-2xl text-teal-500 font-semibold mb-2'>Kyoto Gardens</h2>
                                    <p className='text-blue-grey-700 mb-4'>Immerse yourself in the serene beauty of Kyoto's traditional gardens, where every stone and leaf tells a story of Japanese culture.</p>
                                    <h1 className="heading-xl mb-6 text-[#1A1A1A] font-bold font-manga-title tracking-wide">
                                    <span className='mr-2'>🍁</span><span className="text-[#00897b]" data-metatip="true">Japan</span>
                                    </h1>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2.8, delay: 1.4 }}
                                    className='flex-none w-[400px] bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-Black/20'
                                >
                                    {/* Bali card content */}
                                    <div className='mb-4 h-48 rounded-lg overflow-hidden'>
                                        <img 
                                            src='https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop'
                                            alt='Bali Paradise'
                                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                                        />
                                    </div>
                                    <h2 className='text-2xl text-gray-600 font-semibold mb-2'>Bali Paradise</h2>
                                    <p className='text-blue-grey-700 mb-4'>Discover the enchanting beauty of Bali's rice terraces, ancient temples, and pristine beaches that create a perfect tropical escape.</p>
                                    <h1 className="heading-xl mb-6 text-[#1A1A1A] font-bold font-manga-title tracking-wide">
                                    <span className='mr-2'>🌴</span><span className="text-[#455a64]" data-metatip="true">Indonesia</span>
                                    </h1>
                                </motion.div>
                            </React.Fragment>
                        </div>
                    </div>

                    {/* What You Can Share Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className='mb-16'
                    >
                        <h2 class="font-serif text-4xl font-bold tracking-tight md:text-4xl text-blue-700 mb-0 text-center" data-metatip="true" style={{ lineHeight: 3.5 }}>What You Can Share</h2>
                        {/* Product Reviews */}
                    <motion.div 
                        className='flex flex-col md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 3.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                                once: false, 
                                amount: 0.3,
                                margin: "-100px"
                            }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop'
                                alt='Product Reviews'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Product Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share detailed reviews of the latest gadgets, home appliances, fashion items, or any other products. Include an honest breakdown of features, pros and cons, real-world performance, pricing, and whether it's worth buying. Adding comparison charts and user opinions can enhance credibility.</p>
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div 
                        className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Personal Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Write about personal experiences, whether it's a life-changing moment, a professional journey, or an inspiring story. These can be success stories, lessons learned, challenges overcome, or even failures that provided valuable insights. Readers love authentic and relatable content.</p>
                        </div>
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop'
                                alt='Personal Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                    </motion.div>

                    {/* News Updates */}
                    <motion.div 
                        className='flex flex-col md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2938&auto=format&fit=crop'
                                alt='News Updates'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>News Updates</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Keep your audience informed about the latest happenings in different industries like technology, entertainment, politics, business, and science. Provide insightful analysis, highlight key takeaways, and offer opinions on how these updates impact the world or daily life.</p>
                        </div>
                    </motion.div>

                    {/* Travel Experience */}
                    <motion.div 
                        className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Travel Experiences</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share your travel experiences, from hidden gems to popular destinations. Include details about the culture, local food, must-visit places, budget tips, and travel hacks. High-quality images and travel itineraries can make your post more engaging.</p>
                        </div>
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2935&auto=format&fit=crop'
                                alt='Travel Experiences'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                    </motion.div>

                    {/* Food Recipes */}
                    <motion.div 
                        className='flex flex-col md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2940&auto=format&fit=crop'
                                alt='Food Recipes'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Food Recipes</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Provide step-by-step guides to delicious recipes, along with cooking tips, ingredient alternatives, and nutrition information. You can also include personal cooking experiences, food presentation techniques, and recommendations for pairing meals with beverages.</p>
                        </div>
                    </motion.div>

                    {/* Fitness & Health */}
                    <motion.div 
                        className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Fitness & Health</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Offer expert-backed advice on workouts, nutrition, mental health, and lifestyle improvements. Provide fitness routines, diet plans, weight loss tips, and mindfulness techniques. You can also review health products, share success stories, and debunk fitness myths.</p>
                        </div>
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop'
                                alt='Fitness & Health'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                    </motion.div>

                    {/* Tech Review */}
                    <motion.div 
                        className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
                                alt='Tech Review'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Tech Reviews</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Cover the latest innovations in smartphones, laptops, smart gadgets, AI tools, and software. Discuss features, performance, real-world usability, and value for money. Comparing multiple products and providing buying guides can make your reviews more helpful.</p>
                        </div>
                    </motion.div>

                    {/* Educational Resources */}
                    <motion.div 
                        className='flex flex-col-reverse md:flex-row items-center gap-8 mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                            transition: { duration: 3.5 }
                        }}
                        viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                    >
                        <div className='w-full md:w-1/2'>
                            <h3 className='text-2xl font-bold mb-4 text-black dark:text-black'>Educational Resources</h3>
                            <p className='text-gray-600 dark:text-gray-300'>Share informative content, study guides, online courses, learning strategies, and career advice. You can provide book summaries, coding tutorials, language-learning tips, and academic insights. The goal is to help readers gain knowledge and improve their skills.</p>
                        </div>
                        <motion.div 
                            className='w-full md:w-1/2'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ 
                                x: 0,
                                opacity: 1,
                                transition: { 
                                    duration: 1.5,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{ 
                            once: false, 
                            amount: 0.6,
                            margin: "-100px"
                        }}
                        >
                            <img 
                                src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop'
                                alt='Educational Resources'
                                className='w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'
                            />
                        </motion.div>
                    </motion.div>  
                    </motion.div>
                </Container>

                {/* Community Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className='mb-16'
                >
                    <h2 className="font-serif text-4xl font-bold tracking-tight md:text-4xl text-blue-700 mb-12 text-center">Our Vibrant Community</h2>
                    <div className='grid md:grid-cols-3 gap-8 '>
                        {/* Community Stats */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-gray-800 mb-2'>10K+</div>
                            <p className='text-xl text-gray-800'>Active Writers</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-gray-800 mb-2'>50K+</div>
                            <p className='text-xl text-gray-800'>Published Stories</p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center'
                        >
                            <div className='text-5xl font-bold text-gray-800 mb-2'>100K+</div>
                            <p className='text-xl text-gray-800'>Monthly Readers</p>
                        </motion.div>
                    </div>

                    {/* Testimonials */}
                    <div className='grid md:grid-cols-2 gap-8 mt-12'>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-blue-grey-700 mb-4'>"Traveling has opened my eyes to the beauty of different cultures, breathtaking landscapes, and unforgettable experiences. From hidden gems to famous landmarks, every journey holds a new adventure. Join me as I share my travel stories, tips, and must-visit destinations!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrukKCMMb6qRZhZuH73N02sYQ0qNLintORdA&s" 
                                    alt="Shivya Nath"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-teal-800 font-semibold'>Shivya Nath</h3>
                                    <p className='text-purple-400-accent'>Travel Blogger</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                        >
                            <p className='text-blue-grey-700 mb-4'>"After years of exploring flavors and experimenting in the recipes, I've discovered that food is more than just a meal—it's an experience. From street food adventures to homemade recipes, every dish tells a story. Join me as I share my culinary journey, delicious recipes, and hidden food gems!"</p>
                            <div className='flex items-center'>
                                <img 
                                    src="https://bakewithshivesh.com/wp-content/uploads/2018/09/unnamed-1-1.jpg" 
                                    alt="Shivesh Bhatia"
                                    className='w-12 h-12 rounded-full object-cover mr-4'
                                />
                                <div>
                                    <h3 className='text-teal-800 font-semibold'>Shivesh Bhatia</h3>
                                    <p className='text-purple-400-accent'>Foody Blogger</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <FAQSection />
                </motion.div>
            </div>
        )
    }
}

export default Home



