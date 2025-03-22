import React from 'react';
import { Container } from '../../components';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl md:mt-6 md:text-2xl md:max-w-4xl">
              Welcome to DevBlog, where technology meets creativity. We are a community-driven platform dedicated to empowering developers and tech enthusiasts to share their knowledge, experiences, and insights with the world.
            </p>
          </div>
          
          <div className="mt-12 prose max-w-none text-gray-200">
            <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
            <p className="mb-6">
              Our mission is to create an inclusive space where developers of all skill levels can learn, grow, and connect. We believe in the power of shared knowledge and the impact it can have on the tech community.
            </p>
            
            <h2 className="text-3xl font-semibold text-white mb-6">Our Values</h2>
            <ul className="list-disc pl-8 mb-6 text-lg text-gray-200">
              <li>Innovation and Creativity</li>
              <li>Community and Collaboration</li>
              <li>Quality and Excellence</li>
              <li>Continuous Learning</li>
              <li>Inclusivity and Diversity</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-white mb-6">Join Our Community</h2>
            <p className="text-lg text-gray-200">
              Whether you're a seasoned developer or just starting your journey, DevBlog is here to support your growth. Join our community today and be part of something special.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default About;