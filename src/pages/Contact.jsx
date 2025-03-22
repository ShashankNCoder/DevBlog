import React from 'react';
import { Container } from '../components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import YakImage from "../pages/Yak.jpg";

const Contact = () => {
    const teamMembers = [
        {
            name: "YAK MAJOK DAU",
            role: "Lead Developer",
            image: YakImage, // Use the imported image here
            bio: "Full-stack developer in React and Node.js. Passionate about creating intuitive user experiences.",
            email: "ymajokda@gitam.in",
            github: "https://github.com",
            linkedin: "https://www.linkedin.com/in/yak-majok-dau-68940225b/"
        },
        {
            name: "VANSH AGRAWAL",
            role: "Backend Developer",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGcLkY83_eCUQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727976477325?e=1747267200&v=beta&t=OQKtwnTpZEFfItNmgIUusbiQ9KGlpkRamNoCfLJS4e8",
            bio: "Full-stack developer in React and Node.js & Database expert and API architect with strong focus on security and performance optimization.",
            email: "vagrawal@gitam.in",
            github: "https://github.com/agrawalvansh",
            linkedin: "https://www.linkedin.com/in/agrawalvansh/"
        },
        {
            name: "SHASHANK N",
            role: "UI/UX Designer",
            image: "https://media.licdn.com/dms/image/v2/D5603AQEFjBLubbAJfw/profile-displayphoto-shrink_400_400/B56ZNhvVzFG4Ag-/0/1732511622215?e=1747267200&v=beta&t=XFg6vaq8nV16jZ8Jfo73HuKV4zvcGPH8rJA--FqxX6M",
            bio: "Creative designer focused on user-centered design principles. Experienced in creating beautiful and functional interfaces.",
            email: "snagaraj6@gitam.in",
            github: "http://github.com/ShashankNCoder",
            linkedin: "http://linkedin.com/in/shashankn8105/"
        }
    ];

    return (
        <div className='w-full py-8 min-h-screen bg-gradient-to-br from-purple-900 to-blue-900'>
            <Container>
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-center mb-16'
                >
                    <h1 className='text-5xl font-bold mb-6 text-white'>Meet Our Team</h1>
                    <p className='text-xl text-gray-200 max-w-2xl mx-auto'>
                        We're a passionate team dedicated to creating the best blogging platform for our community.
                        Feel free to reach out to us with any questions or feedback.
                    </p>
                </motion.div>

                {/* Team Members Grid */}
                <div className='grid md:grid-cols-3 gap-8 mb-16'>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'
                        >
                            <div className='mb-6'>
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className='w-32 h-32 rounded-full mx-auto object-cover border-4 border-white/20'
                                />
                            </div>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold text-white mb-2'>{member.name}</h3>
                                <p className='text-blue-200 mb-4'>{member.role}</p>
                                <p className='text-gray-300 mb-6'>{member.bio}</p>
                                <div className='flex justify-center space-x-4'>
                                    <a 
                                        href={`mailto:${member.email}`}
                                        className='text-white hover:text-blue-300 transition-colors'
                                        title="Email"
                                    >
                                        <FaEnvelope size={24} />
                                    </a>
                                    <a 
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white hover:text-blue-300 transition-colors'
                                        title="GitHub"
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                    <a 
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-white hover:text-blue-300 transition-colors'
                                        title="LinkedIn"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20'
                >
                    <h2 className='text-3xl font-bold mb-6 text-white text-center'>Get in Touch</h2>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor='name' className='block text-white mb-2'>Name</label>
                            <input
                                type='text'
                                id='name'
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='Your name'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-white mb-2'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                placeholder='your@email.com'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-white mb-2'>Message</label>
                            <textarea
                                id='message'
                                rows={4}
                                className='w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                    <h2 className='text-3xl font-bold mb-4 text-white'>Visit Our Office</h2>
                    <p className='text-gray-200'>
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