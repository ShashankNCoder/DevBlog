import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Heart, Share2, Bookmark, Play } from 'lucide-react';
import Toast from './Toast';

const CategoryContent = ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Sample data structure for different categories
    const categoryContent = {
        cooking: {
            posts: [
                {
                    $id: 'cooking1',
                    title: 'Homemade Chile Relleno Recipe',
                    content: 'by CHUCK "THE CHILI GUY" MILLER, how to make the homemade chile Relleno Recipe...',
                    featuredImage: 'https://www.howtocook.recipes/wp-content/uploads/2022/04/Chile-relleno-recipe.jpg'
                },
                {
                    $id: 'cooking2',
                    title: 'Slow Cooker Chicken Tortilla Soup',
                    content: 'This healthy crockpot chicken tortilla soup is a perfectly hearty, feel good soup. After a tiring, busy day it’s just what you’ll look forward to coming home to!...',
                    featuredImage: 'https://www.cookingclassy.com/wp-content/uploads/2014/12/slow-cooker-chicken-tortilla-soup-2-1365x2048.jpg'
                },
                {
                    $id: 'cooking3',
                    title: 'Easy Taco Soup Recipe',
                    content: 'I’ve perfected this simple taco soup recipe over the years, and it’s a major fall favorite for my family. It has all the cozy comfort of chili, but just a little lighter and healthier...',
                    featuredImage: 'https://www.cookingclassy.com/wp-content/uploads/2019/08/taco-soup-16.jpg'
                }
            ],
            videos: [
                {
                    id: 'cooking-video-1',
                    title: 'While a lot of us are remaining indoors, here are a few quick, simple and cheap recipes to follow to learn.',
                    content: "An immersive journey through the world's most vibrant cities and their unique cultures.",
                    url: 'https://www.youtube.com/embed/mhDJNfV7hjk'
                },
                {
                    id: 'cooking-video-2',
                    title: 'Napa Cabbage Rolls Recipe by Food Fusion',
                    content: 'Wrapped, rolled, and ready to impress — these Napa cabbage rolls are light, juicy, and packed with flavor in every bite...',
                    url: 'https://www.youtube.com/embed/ekqVAaQDtSU'
                },
                {
                    id: 'cooking-video-3',
                    title: '20 Super Easy Recipes & Dinners For The Family',
                    content: 'Learn how to cook 20 super quick super easy recipes for the family! These recipes feature on the Jamie Oliver Quick and Easy...',
                    url: 'https://www.youtube.com/embed/NYHhDQBz4ZE'
                }
            ]
        },
        coding: {
            posts: [
                {
                    $id: 'Coding1',
                    title: 'C Programming',
                    content: 'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old...',
                    featuredImage: 'https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/233_1677505293.png'
                },
                {
                    $id: 'Coding2',
                    title: 'Rust Programming',
                    content: 'Rust is a systems programming language emphasizing safety, speed, and concurrency, designed to tackle memory errors and concurrency issues common in C and C++, while also offering a high-level programming experience...',
                    featuredImage: 'https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png'
                },
                {
                    $id: 'Coding3',
                    title: 'Android Development',
                    content: 'Android development is the process of creating software applications for devices running the Android operating system...',
                    featuredImage: 'https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=75&auto=format,compress&fm=png8'
                }
            ],
            videos: [
                {
                    id: 'Coding-video-1',
                    title: 'Java Full Course for Beginners | used for Software development, Android apps, and more! ☕️ This beginner-friendly course takes...',
                    content: 'Master Java – a must-have language for software development, Android apps, and more! ☕️ This beginner-friendly course takes ...',
                    url: 'https://www.youtube.com/embed/eIrMbAQSU34'
                },
                {
                    id: 'Coding-video-2',
                    title: 'Python Tutorial For Beginners in Hindi | Complete Python Course 🔥',
                    content: "Exciting News! I've just launched my Data Science Course – and it's now in Early Bird Access! If you loved this Python.",
                    url: 'https://www.youtube.com/embed/UrsmFxEIp5k'
                },
                {
                    id: 'Coding-video-3',
                    title: 'Blockchain Full Course - 4 Hours | Blockchain Tutorial',
                    content: 'This Blockchain Tutorial Full Course will help you understand all the basic concepts of Blockchain. Do not forget to a...',
                    url: 'https://www.youtube.com/embed/SyVMma1IkXM'
                }
            ]
        },
        sports: {
            posts: [
                {
                    $id: 'sports1',
                    title: 'Cricket',
                    content: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field, at the centre of which is a 22-yard (20-metre; 66-foot) pitch with a...',
                    featuredImage: 'https://images.forbesindia.com/media/images/2023/Oct/img_220741_cricket.jpg'
                },
                {
                    $id: 'sports2',
                    title: 'Volleyball',
                    content: "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's...",
                    featuredImage: 'https://www.fisu.net/app/uploads/2023/09/volleyball.jpg'
                },
                {
                    $id: 'sports3',
                    title: 'Hockey',
                    content: 'Hockey is a term used to denote a family of various types of both summer and winter team sports which originated on either an outdoor field, sheet of ice...',
                    featuredImage: 'https://th-i.thgim.com/public/incoming/a4m7c8/article68487044.ece/alternates/FREE_1200/Paris_Olympics_Hockey_51524.jpg'
                }
            ],
            videos: [
                {
                    id: 'sports-video-1',
                    title: 'Last International Match Between Lionel Messi And Cristiano Ronaldo',
                    content: 'Last International Match Between Lionel Messi And Cristiano Ronaldo Portugal 1-0 Argentina (2014) Argentina 2-1 Portugal.',
                    url: 'https://www.youtube.com/embed/UfbjX0IUjPY'
                },
                {
                    id: 'sports-video-2',
                    title: 'Telugu Titans 36-32 Gujarat Giants | Match 111 Highlights',
                    content: 'VIDEO COURTESY: PRO KABADDI LEAGUE (PKL), STAR SPORTS, MASHAL SPORTS Telugu Titans Vs. Gujarat Giants FULL .',
                    url: 'https://www.youtube.com/embed/puzt7o43poM'
                },
                {
                    id: 'sports-video-3',
                    title: "Men's 4x100m Relay Final | World Athletics Championships Beijing 2015",
                    content: 'Make sure you subscribe for athletics highlights, interviews with the athletes, training tips and more!.',
                    url: 'https://www.youtube.com/embed/r-c3BQJqf3o'
                }
            ]
        },
        technology: {
            posts: [
                {
                    $id: 'Technology1',
                    title: 'Artificial Intelligence',
                    content: 'Artificial intelligence (AI) refers to the capability of computational systems to perform tasks typically associated with human intelligence...',
                    featuredImage: 'https://cdn.ceps.eu/wp-content/uploads/2024/07/vecteezy_ai-generated-ai-circuit-board-technology-background_37348385-1300x731.jpg'
                },
                {
                    $id: 'Technology2',
                    title: 'Robots',
                    content: 'A robot is a machine—especially one programmable by a computer—capable of carrying out a complex series of actions automatically...',
                    featuredImage: 'https://news.mit.edu/sites/default/files/images/202501/MIT-luca-carlone-01-press.jpg'
                },
                {
                    $id: 'Technology3',
                    title: 'Machines',
                    content: 'A machine is a physical system that uses power to apply forces and control movement to perform an action. The term is commonly applied to artificial devices...',
                    featuredImage: 'https://magnusvinding.com/wp-content/uploads/2020/08/robots.jpg'
                }
            ],
            videos: [
                {
                    id: 'Technology-video-1',
                    title: 'Opening keynote | Google I/O 2023 | conference',
                    content: 'Kicking off our annual developer conference Google I/O on May 10, 2023. Join Sundar Pichai, CEO of Google and Alphabet in a.',
                    url: 'https://www.youtube.com/embed/ixRanV-rdAQ'
                },
                {
                    id: 'Technology-video-2',
                    title: 'Why Apple’s iPhone Launch Was A Miracle',
                    content: 'There were dozens of incredible product introductions by Steve Jobs while he was CEO of Apple. Like pulling the iPod.',
                    url: 'https://www.youtube.com/embed/MM2WypS-iMY'
                },
                {
                    id: 'Technology-video-3',
                    title: 'Meet Willow, our state-of-the-art quantum chip',
                    content: 'The Google Quantum AI team is proud to announce Willow, our latest quantum chip. Willow has state-of-the-art performance.',
                    url: 'https://www.youtube.com/embed/W7ppd_RY-UE'
                }
            ]
        },
        events: {
            posts: [
                {
                    $id: 'events1',
                    title: 'Maha Kumbh Mela',
                    content: 'The Kumbh Mela (held every 6 years) will be known simply as the "Kumbh Mela", and the Kumbh Mela (held every 12 years) will be known as the " Maha Kumbh Mela "...',
                    featuredImage: 'https://static01.nyt.com/images/2025/01/14/multimedia/00xp-festival-01-fkpv/00xp-festival-01-fkpv-videoSixteenByNine3000.jpg'
                },
                {
                    $id: 'events2',
                    title: 'Microsoft celebrates 50 years',
                    content: "Celebrate Microsoft's 50th anniversary with a timeline of milestones, retro photos, exclusive leader insights, partner quotes and key resources showcasing ...",
                    featuredImage: 'https://msftstories.thesourcemediaassets.com/sites/716/2025/04/msft50thopen-scaled.jpg'
                },
                {
                    $id: 'events3',
                    title: 'Paris Olympics 2024',
                    content: 'The 2024 Summer Olympics officially the Games of the XXXIII Olympiad and branded as Paris 2024, were an international multi-sport event held from 26 July to...',
                    featuredImage: 'https://www.anocolympic.org/wp-content/uploads/2024/03/2024-03-08-Paris.jpg'
                }
            ],
            videos: [
                {
                    id: 'events-video-1',
                    title: 'The Most AMAZING FESTIVALS And Events Around The World!!',
                    content: 'The Most AMAZING FESTIVALS And Events Around The World!! Subcribe now with all the notifications on for more travel hacks!',
                    url: 'https://www.youtube.com/embed/BB-yNd3hUaU'
                },
                {
                    id: 'events-video-2',
                    title: 'Best Festivals in the World: 10 Unusual Celebrations and National Customs',
                    content: 'National customs and traditions, as well as various tourisms activities have led to the creation and popularization of.',
                    url: 'https://www.youtube.com/embed/9l3WiwugNFE'
                },
                {
                    id: 'events-video-3',
                    title: 'Cultural Celebrations Around the World! 🌍🎉| Fun Festivals for Kids!',
                    content: 'Join us on an exciting adventure as we explore some of the most amazing cultural celebrations from around the world! From',
                    url: 'https://www.youtube.com/embed/1z7Xz8dnCq4'
                }
            ]
        },
        life: {
            posts: [
                {
                    $id: 'life1',
                    title: 'Yoga',
                    content: 'Yoga is a group of physical, mental, and spiritual practices or disciplines that originated with its own philosophy in ancient India, aimed at controlling...',
                    featuredImage: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2021/11/pexels-yan-krukov-8436601-copy-scaled.jpg'
                },
                {
                    $id: 'life2',
                    title: 'Karate',
                    content: 'Modern karate is primarily a striking art that uses punches and kicks, traditional karate training also employs throwing and joint locking techniques...',
                    featuredImage: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/j1sfphb9tbebb5zc7vap'
                },
                {
                    $id: 'life3',
                    title: 'Kung Fu',
                    content: 'In general, kung fu refers to the Chinese martial arts also called quanfa. In China, it refers to any study, learning, or practice that requires patience...',
                    featuredImage: 'https://www.economist.com/content-assets/images/20240615_MAP506.jpg'
                }
            ],
            videos: [
                {
                    id: 'life-video-1',
                    title: 'Arnold Schwarzenegger Leaves the Audience SPEECHLESS',
                    content: '"At the age of 20 I went to London and won the youngest Mr.Universe ever. And it was because I had a goal. So let .',
                    url: 'https://www.youtube.com/embed/1bumPyvzCyo'
                },
                {
                    id: 'life-video-2',
                    title: 'Monday Morning Team Motivation | Jack Ma Life Story ( CEO of Alibaba)',
                    content: 'Jack Ma, the founder and CEO of Alibaba gives his advice to the young people. In this talk he focuses on why succes.',
                    url: 'https://www.youtube.com/embed/D24Oo0B5AN8'
                },
                {
                    id: 'life-video-3',
                    title: 'Ratan Tata Leaves The Audience SPEECHLESS | One of the Best',
                    content: "This is Ratan Tata's ULTIMATE advice for Young People. In this video Chairman of Tata Group Ratan Tata reveals the Problems .",
                    url: 'https://www.youtube.com/embed/7m4zQpf3Ouo'
                }
            ]
        }
    };

    const content = categoryContent[category] || categoryContent['cooking'];

    const [likedPosts, setLikedPosts] = useState({});
    const [savedPosts, setSavedPosts] = useState({});
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const [animatedLike, setAnimatedLike] = useState({ show: false, x: 0, y: 0 });

    const handleLike = (postId, e) => {
        e.preventDefault();
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setAnimatedLike({
            show: true,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setLikedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
        setToast({
            show: true,
            message: !likedPosts[postId] ? 'Added to your likes!' : 'Removed from your likes',
            type: 'success'
        });
        setTimeout(() => {
            setAnimatedLike({ show: false, x: 0, y: 0 });
            setToast({ show: false, message: '', type: 'success' });
        }, 1000);
    };

    const handleSave = (postId, e) => {
        e.preventDefault();
        e.stopPropagation();
        setSavedPosts(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
        setToast({
            show: true,
            message: !savedPosts[postId] ? 'Post saved!' : 'Post unsaved',
            type: 'success'
        });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 2000);
    };

    const [mediaLoading, setMediaLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(false); // Grid shows immediately
            setMediaLoading(true); // Media starts loading
            setTimeout(() => {
                setMediaLoading(false); // Media finishes loading after 1 second
            }, 1300);
        } catch (err) {
            setError('Failed to load content');
            setLoading(false);
            setMediaLoading(false);
        }
    }, [category]);

    if (loading) {
        return (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 bg-white/20"></div>
          </div>
        )
    }

    if (error) {
        return (
            <div className="w-full mb-16 text-center text-red-500 p-4">
                {error}
            </div>
        );
    }

    return (
        <div className="w-full mb-16">
            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast({ show: false, message: '', type: 'success' })}
                />
            )}
            <div className="flex justify-between items-center mb-0 px-4 md:px-8">
                <h2 className="section-title text-2xl md:text-2xl font-bold text-gray-700">Latest Posts</h2>
                <div className="flex items-center gap-4">
                    <button className="bg-[var(--color-primary)] text-gray-800 px-4 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-all duration-300 flex items-center gap-2 group font-bold text-gray-700">
                        View all
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-6 px-4 md:px-8">
                {content.posts.map((post) => (
                    <div key={post.$id} className="relative group">
                        <div className="transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] bg-blue rounded-xl overflow-hidden transform hover:-translate-y-2 hover:outline hover:outline-2 hover:outline-blue-500">
                            {mediaLoading ? (
                                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : (
                                <PostCard 
                                    id={post.$id}
                                    title={post.title}
                                    content={post.content}
                                    featuredImage={post.featuredImage}
                                />
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                                {animatedLike.show && (
                                    <div 
                                        className="absolute animate-like-pop"
                                        style={{
                                            left: `${animatedLike.x}px`,
                                            top: `${animatedLike.y}px`,
                                            pointerEvents: 'none'
                                        }}
                                    >
                                        <Heart className="fill-red-500 stroke-red-500" size={50} />
                                    </div>
                                )}
                                <button onClick={(e) => handleLike(post.$id, e)} className="text-white hover:scale-110 transition-transform">
                                    <Heart className={likedPosts[post.$id] ? 'fill-red-500 stroke-red-500' : ''} size={20} />
                                </button>
                                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="text-white hover:scale-110 transition-transform">
                                    <Share2 size={20} />
                                </button>
                                <button onClick={(e) => handleSave(post.$id, e)} className="text-white hover:scale-110 transition-transform">
                                    <Bookmark className={savedPosts[post.$id] ? 'fill-white' : ''} size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Videos Grid */}
            <div className="flex justify-between items-center mb-0 mt-10 px-4 md:px-6 font-bold text-gray-700">
                <h2 className="section-title">Featured Videos</h2>
                <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium flex items-center group font-bold text-gray-700">
                    View all
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mt-6 px-4 md:px-8">
                {content.videos.map((video) => (
                    <div key={video.id} className="relative group">
                        <div className="transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] bg-white rounded-xl overflow-hidden transform hover:-translate-y-2 hover:outline hover:outline-2 hover:outline-blue-500">
                            <div className="aspect-video relative">
                                {mediaLoading ? (
                                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                    </div>
                                ) : (
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="mt-2 text-gray-600 line-clamp-2">
                                    {video.content}
                                </p>
                                <div className="mt-3 flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <button onClick={(e) => handleLike(`video-${video.id}`, e)} className="text-gray-600 hover:text-red-500 transition-colors">
                                            <Heart className={likedPosts[`video-${video.id}`] ? 'fill-red-500 stroke-red-500' : ''} size={20} />
                                        </button>
                                        <button className="text-gray-600 hover:text-blue-500 transition-colors">
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                    <button onClick={(e) => handleSave(`video-${video.id}`, e)} className="text-gray-600 hover:text-blue-500 transition-colors">
                                        <Bookmark className={savedPosts[`video-${video.id}`] ? 'fill-gray-600' : ''} size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryContent;