import React from 'react';
import { Container } from '../components';
import { motion } from 'framer-motion';
import { Code, Pen, Globe, Shield, Zap, Share2 } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: Pen,
            title: 'Rich Text Editor',
            description: 'Create beautiful content with our intuitive rich text editor. Support for markdown, images, and formatting.'
        },
        {
            icon: Shield,
            title: 'Secure Authentication',
            description: 'Enterprise-grade security with Appwrite authentication. Your data is always protected.'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Optimized performance with React and Vite. Experience blazing fast page loads and smooth transitions.'
        },
        {
            icon: Code,
            title: 'Code Snippets',
            description: 'Share code snippets with syntax highlighting. Perfect for technical tutorials and documentation.'
        },
        {
            icon: Share2,
            title: 'Social Sharing',
            description: 'Integrate with social media platforms. Share your content across multiple channels easily.'
        },
        {
            icon: Globe,
            title: 'SEO Optimized',
            description: 'Built with SEO best practices. Help your content reach a wider audience.'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className='w-full py-8 min-h-screen bg-gradient-to-br from-blue-900 to-black'>
            <Container>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-5xl font-bold mb-6 text-white'>Platform Features</h1>
                    <p className='text-xl text-gray-200 max-w-2xl mx-auto'>
                        Discover the powerful features that make our blogging platform stand out.
                        Built with modern technologies for the best blogging experience.
                    </p>
                </motion.div>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={item}
                            className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20
                                     hover:bg-white/20 transition-all duration-300 group'
                        >
                            <div className='mb-4 inline-block p-3 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30
                                          transition-colors duration-300'>
                                <feature.icon className='w-8 h-8 text-blue-400' />
                            </div>
                            <h3 className='text-2xl font-bold text-white mb-3'>{feature.title}</h3>
                            <p className='text-gray-300'>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className='text-center mt-16 p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20'
                >
                    <h2 className='text-3xl font-bold mb-4 text-white'>Ready to Get Started?</h2>
                    <p className='text-gray-200 mb-6'>
                        Join our community of bloggers and start sharing your stories today.
                    </p>
                    <button 
                        className='px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                                 hover:bg-blue-700 transition-colors duration-200'
                        onClick={() => window.location.href = '/signup'}
                    >
                        Create Your Blog
                    </button>
                </motion.div>
            </Container>
        </div>
    );
};

export default Features;