import React from 'react';
import { Container } from '../components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const teamMembers = [
        {
            name: "John Smith",
            role: "Lead Developer",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            bio: "Senior full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies. Passionate about building scalable applications and mentoring junior developers.",
            email: "john.smith@example.com",
            github: "https://github.com",
            linkedin: "https://www.linkedin.com",
            company: "Google"
        },
        {
            name: "Jane Doe",
            role: "Backend Developer",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            bio: "Experienced backend developer specializing in Node.js and database optimization. Passionate about building secure and scalable server architectures.",
            email: "jane.doe@example.com",
            github: "https://github.com",
            linkedin: "https://www.linkedin.com",
            company: "Microsoft"
        },
        {
            name: "Michael Chen",
            role: "Full Stack Developer",
            image: "https://randomuser.me/api/portraits/men/35.jpg",
            bio: "Passionate full stack developer with expertise in modern web technologies. Dedicated to creating efficient and scalable solutions.",
            email: "michael.chen@example.com",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            company: "Amazon"
        }
    ];

    return (
        <div className='w-full py-8 min-h-screen bg-gradient-to-br from-gray-400 via-gray-300 to-gray-300'>
            <Container>
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-5xl font-bold mb-6 text-blue-700'>Meet Our Team</h1>
                    <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
                        We're a passionate team dedicated to creating the best blogging platform for our community.
                        Feel free to reach out to us with any questions or feedback.
                    </p>
                </motion.div>

                {/* Team Members Grid */}
                <div className='grid md:grid-cols-3 gap-8 mb-16 transition-all duration-200'>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 } }}
                            className='bg-blue-100/30 backdrop-blur-md rounded-xl p-6 border border-white/20 flex flex-col h-full'
                        >
                            <div className='mb-6 flex-shrink-0'>
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className='w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20 hover:scale-105 transition-transform duration-300'
                                />
                            </div>
                            <div className='text-center flex-grow flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-2xl font-bold text-[#311b92] mb-2'>{member.name}</h3>
                                    <p className='text-[#546e7a] mb-4'>{member.role}</p>
                                    <p className='text-[#3f51b5] mb-6'>{member.bio}</p>
                                </div>
                                <div className='flex justify-center space-x-4 mt-auto'>
                                    <a 
                                        href={`mailto:${member.email}`}
                                        className='text-black hover:text-blue-300 transition-colors'
                                        title="Email"
                                    >
                                        <img 
                                            src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" 
                                            alt="Email"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a 
                                        href={member.github}
                                        className='text-black hover:text-blue-300 transition-colors'
                                        title="GitHub"
                                    >
                                        <img 
                                            src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" 
                                            alt="GitHub"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <a 
                                        href={member.linkedin}
                                        className='text-black hover:text-blue-300 transition-colors'
                                        title="LinkedIn"
                                    >
                                        <img 
                                            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
                                            alt="LinkedIn"
                                            className="w-6 h-6"
                                        />
                                    </a>
                                    <div 
                                        className='text-black hover:text-blue-300 transition-colors'
                                        title={`Works at ${member.company}`}
                                    >
                                       <img 
                                            src="https://cdn-icons-png.flaticon.com/512/4300/4300059.png" 
                                            alt="Company"
                                            className="w-6 h-6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='max-w-2xl mx-auto bg-blue-100/30 backdrop-blur-md rounded-xl p-8 border border-white/20'
                >
                    <h2 className='text-3xl font-bold mb-6 text-blue-700 text-center'>Get in Touch</h2>
                    <form className='space-y-6' onSubmit={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}>
                        <div>
                            <label htmlFor='name' className='block text-black mb-2'>Name</label>
                            <input
                                type='text'
                                id='name'
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Your name'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-black mb-2'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='your@email.com'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-black mb-2'>Message</label>
                            <textarea
                                id='message'
                                rows={4}
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Your message'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Office Location */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mt-16'
                >
                    <h2 className='text-3xl font-bold mb-4 text-[#3d5afe]'>Visit Our Office</h2>
                    <p className='text-[#546e7a]'>
                        GITAM, Bengaluru, Karnataka-560001<br />
                        Karnataka, INDIA<br />
                        Monday - Friday: 8:00 AM - 4:00 PM
                    </p>
                </motion.div>
            </Container>
        </div>
    );
};

export default Contact;