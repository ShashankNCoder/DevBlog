import React, { useState } from 'react';
import { Container, PostCard } from '../components';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Edit, Calendar, Instagram, Twitter, Linkedin, BookOpen, PenSquare, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function Profile() {
    const navigate = useNavigate();
    
    // Mock user data
    const [selectedCategory, setSelectedCategory] = useState('all');
    const mockUserData = {
        name: 'Timothy Sykes',
        email: 'support-alerts@timothysykes.com',
        bio: "I'm Timothy Sykes, a penny stock trader and entrepreneur who turned a $12,415 Bar Mitzvah gift into $1.65 million through day trading while still in college. I built my career by sharing my trading journey and now run a blog and subscription-based platform where I teach others how to trade penny stocks. In 2015 alone, my platform generated up to $20 million in revenue, and I’ve been committed ever since to helping aspiring traders succeed in the market.",
        instagram: 'https://www.instagram.com/timothysykes',
        twitter: 'https://x.com/timothysykes',
        linkedin: 'https://www.linkedin.com/in/timothysykes',
        $createdAt: new Date().toISOString(),
        profileImageUrl: 'https://pbs.twimg.com/profile_images/1347794906736189440/R7sx3oCP_400x400.jpg'
    };

    // Simulated stats data
    const userStats = {
        posts: 12,
        comments: 48,
        likes: 156,
        drafts: 3,
        totalReadTime: 256 // minutes
    };

    // Mock recent posts
    const recentPosts = [
        {
            $id: '1',
            title: 'Is the Stock Market Open on Christmas Eve? – Timothy Sykes',
            content: "As the holiday season arrives, traders are looking for the best present their is — the Santa Claus rally! If you want to take advantage of it, understanding the stock market holiday schedule is crucial.\n\nHere's a breakdown of holiday trading hours, strategies, and what to watch this week.\n\nStock Market Holiday Hours for Christmas Eve and Christmas Day 2024\nThe hours of operation for U.S. markets change significantly around major holidays like Christmas. Here's what to expect this year:\n\nChristmas Eve (Tuesday, December 24):\n\nThe NYSE and Nasdaq will close early at 1 p.m. Eastern Time.\nThe bond market observes a slightly later closure at 2 p.m. ET.\nChristmas Day (Wednesday, December 25):\n\nAll major U.S. stock exchanges and bond trading platforms will be closed in observance of the holiday.\nTrading resumes during regular trading hours on Thursday, December 26.\n\nFor those keeping an eye on global markets, note that some foreign stock exchanges may follow different schedules. Be sure to check the full list of stock market holidays for your region.",
            featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQGD_HMND4c0DA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734979827936?e=2147483647&v=beta&t=I5KyaibUUcJ_r-RjBKhs-bKyRsOjTo0rOarPm2MkZuo'
        },
        {
            $id: '2',
            title: 'SOUN Leads 3 AI Stocks to Watch in Dec. 2024 – Timothy Sykes',
            content: "Artificial intelligence (AI) remains one of the most dynamic sectors, offering both innovation and investment opportunities. While giants like NVIDIA dominate headlines, smaller players in the AI space—penny stocks with rapid growth potential—are turning heads. Let's take a closer look at three standout stocks making waves this December.\n\nTop 3 AI Stocks to Watch for December 2024\nMy top AI penny stock picks are:\n\nNASDAQ: SOUN — SoundHound AI Inc — The Voice AI Leader Trading at 52-Week Highs\nNASDAQ: GXAI — Gaxos.AI Inc — Simplifying AI for Game Development\nNASDAQ: SERV — Serve Robotics Inc — Nvidia's Last-Mile Delivery Partner\n\n1. SoundHound AI Inc (NASDAQ: SOUN): The Voice AI Leader Trading at 52-Week Highs\nSoundHound AI has been a key player in the voice recognition space, earning recognition for its consistent growth and sector leadership. Its Q3 2024 earnings were a testament to its momentum, with revenue surging 89% year-over-year to $25 million.\n\nWhat Sets SOUN Apart:\n- Strategic Backing: With NVIDIA holding shares, SoundHound continues to build credibility in the tech sector.\n- Strong Financials: Record-breaking earnings and solid partnerships, including its \"Hey Kia\" rollout in India, are driving the company's upward trajectory.\n- Technical Setup: Trading near $15, SOUN is consolidating around key resistance levels, positioning itself for a breakout.",
            featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQH_pXQkl0AYlg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733849769293?e=2147483647&v=beta&t=Qq93aZ8fUJ4C-__y0Uu5pO7D7HDbjJ-0wzWKiFjk8vI'
        },
        {
            $id: '3',
            title: 'The Top Quantum Computing Stocks To Watch – Timothy Sykes',
            content: "Quantum computing and artificial intelligence (AI) are the two most explosive sectors in tech right now. What's more, quantum computing may be the next big driver of AI's growth. With AI's relentless demand for processing power, quantum technology is emerging as a potential solution to train complex models faster and more efficiently.\n\nCheck out my AI penny stock watchlist here!\nFor traders, this is creating massive opportunities. Quantum computing penny stocks—low-priced equities tied to this cutting-edge technology—are gaining momentum. These stocks thrive on speculation, news catalysts, and partnerships with industry leaders. And real news like Amazon's entry into quantum computing continues to send these stocks even higher. Their high volatility makes them ideal for short-term trading, but they also demand preparation and a disciplined approach.\n\nHere's a breakdown of five quantum computing penny stocks showing major potential right now.\n\n1. Quantum Computing Inc. (NASDAQ: QUBT): Riding the Quantum-AI Hype\nWhy It's Hot: QUBT is one of the year's top performers, up 715%* year-to-date. This stock spiked 560%* in November after announcing its first order from its TFLN photonic chip foundry, a crucial step in advancing quantum computing applications. With its low float and high volatility, QUBT rewards prepared traders.\n\nWhat to Watch: Support sits around $6. Watch for dip-buy setups if the stock consolidates or breakout trades if new catalysts hit. QUBT's ability to spike on news makes it a prime candidate for short-term trades.",
            featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQH806mX8WIDFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733474936439?e=2147483647&v=beta&t=0YLsNFIf0EDNPoYO6nu_alatzAlcra3D172_AUlFCnU'
        },
        {
            $id: '4',
            title: '3 Crypto Penny Stocks to Watch as Bitcoin Nears $100K – Timothy Sykes',
            content: "Bitcoin's unprecedented climb toward $100,000 is making waves across markets, driving immense volatility in crypto-linked penny stocks. With Bitcoin-friendly policies hinted at by Donald Trump and blockchain stocks surging alongside crypto's rally, traders are seeking the next breakout opportunities.\n\nHere are three crypto penny stocks worth watching closely as Bitcoin approaches this historic milestone.\n\n1. Bluesky Digital Assets (OTCQB: BTCWF)\nWhere AI Meets Blockchain\n\nBluesky Digital Assets is gearing up for its January 2025 launch of the AI-powered BlueskyINTEL Web Engagement Platform (WEP). This platform connects businesses with blockchain and AI tech providers and has already drawn interest from Amazon AWS during its soft launch.\n\nWhy Watch BTCWF?\n- Revenue generation is set to start in January 2025.\n- Strategic partnerships, including interest from Amazon AWS, position it for strong growth.\n\nTrading Insight: Bitcoin's rally could lift BTCWF as a sympathy play. Focus on support levels and prepare for volatility given its pre-revenue status.\n\n2. BTC Digital Ltd. (NASDAQ: BTCT)\nBitcoin Mining Meets Meme-Stock Mania\n\nBTC Digital soared 316% in one day last week, showcasing extreme volatility. As a Bitcoin miner with a market cap of just $42 million, BTCT is highly reactive to Bitcoin's moves, making it a prime momentum play.",
            featuredImage: 'https://media.licdn.com/dms/image/v2/D5612AQF12Fk9NH74rQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732208903150?e=2147483647&v=beta&t=gld5NSO9pALaHXkuakzmLC0AJbKvCdn-pJT5BrEfFvI'
        }
    ];

    // Reading preferences
    const readingPreferences = ['Trading', 'React', 'Web Development', 'UI/UX', 'stock market'];
    
    const socialLinks = {
        instagram: mockUserData.instagram,
        twitter: mockUserData.twitter,
        linkedin: mockUserData.linkedin
    };
    
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full py-8 min-h-screen bg-gradient-to-br from-gray-400 via-gray-300 to-gray-300">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className="max-w-7xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden bg-gradient-to-r">
                        {/* Header/Banner Section */}
                        <div className="h-32 bg-gradient-to-r from-blue-900 via-blue-700 to-black"></div>
                        
                        {/* Profile Info Section */}
                        <div className="p-6">
                            <div className="flex flex-col items-center -mt-20 mb-6">
                                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-black text-4xl font-bold border-4 border-card overflow-hidden" style={{backgroundImage: mockUserData.profileImageUrl ? `url(${mockUserData.profileImageUrl})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                    {mockUserData.profileImageUrl ? (
                                        <img 
                                            src={mockUserData.profileImageUrl} 
                                            alt="Profile" 
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                        />
                                    ) : (
                                        <User className="w-16 h-16" />
                                    )}
                                </div>
                                <h1 className="mt-4 text-2xl font-bold text-foreground">{mockUserData.name}</h1>
                                <p className="text-muted-foreground">{mockUserData.email}</p>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6 flex justify-center space-x-4">
                                <a href={mockUserData.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                                         alt="Instagram" 
                                         className="w-6 h-6 hover:scale-105 transition-transform duration-300" />
                                </a>
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" 
                                         alt="X (Twitter)" 
                                         className="w-6 h-6 hover:scale-105 transition-transform duration-300" />
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                                         alt="LinkedIn" 
                                         className="w-6 h-6 hover:scale-105 transition-transform duration-300" />
                                </a>
                            </div>

                            {/* Bio Section */}
                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <h3 className="font-semibold mb-2">About Me</h3>
                                <p className="text-muted-foreground">
                                    {mockUserData.bio}
                                </p>
                            </div>

                            {/* User Stats */}
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.posts}</p>
                                    <p className="text-sm text-muted-foreground">Posts</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.comments}</p>
                                    <p className="text-sm text-muted-foreground">Comments</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.likes}</p>
                                    <p className="text-sm text-muted-foreground">Likes</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.drafts}</p>
                                    <p className="text-sm text-muted-foreground">Drafts</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{Math.round(userStats.totalReadTime / 60)}</p>
                                    <p className="text-sm text-muted-foreground">Hours Read</p>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="space-y-6 mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <User className="w-5 h-5 text-primary" />
                                            <h3 className="font-semibold">Account Info</h3>
                                        </div>
                                        <div className="mt-3 space-y-2">
                                            <p className="text-sm text-muted-foreground">Member since</p>
                                            <p className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(mockUserData.$createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-primary" />
                                            <h3 className="font-semibold">Contact Info</h3>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-sm text-muted-foreground">Email address</p>
                                            <p className="mt-1">{mockUserData.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Reading Preferences */}
                                <div className="p-4 bg-muted rounded-lg mt-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        <h3 className="font-semibold">Reading Preferences</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {readingPreferences.map((pref, index) => (
                                            <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                                {pref}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Blog Posts */}
                                <div className="mt-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            <PenSquare className="w-5 h-5" />
                                            Recent Posts
                                        </h3>
                                        <div className="flex gap-2">
                                            {['all', 'published', 'drafts'].map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    className={`px-3 py-1 rounded-full text-sm transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'bg-muted text-muted-foreground hover:bg-primary/20'}`}
                                                >
                                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {recentPosts.map((post) => (
                                            <motion.div
                                                key={post.$id}
                                                variants={fadeInUp}
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <PostCard {...post} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Edit Profile Button */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={() => navigate('/')}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                                    >

                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </div>
    );
}

export default Profile;