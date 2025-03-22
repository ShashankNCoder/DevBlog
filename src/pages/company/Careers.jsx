import React from 'react';
import { Container } from '../../components';
import { motion } from 'framer-motion';

function Careers() {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Content Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="py-8 min-h-screen bg-gradient-to-br from-blue-900 to-black">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20"
        >
          <h1 className="text-3xl font-bold mb-6 text-white">Careers at DevBlog</h1>
          <div className="prose max-w-none text-gray-200">
            <p className="mb-8">
              Join our team and help shape the future of developer content. We're always looking for talented individuals who are passionate about technology and community building.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6 text-white">Open Positions</h2>
            <div className="grid gap-6">
              {positions.map((position, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={index} 
                  className="border border-white/20 rounded-lg p-6 hover:bg-white/5 transition-all backdrop-blur-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {position.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">Why Join Us?</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Competitive salary and benefits</li>
                <li>Remote-first culture</li>
                <li>Professional development opportunities</li>
                <li>Work with cutting-edge technologies</li>
                <li>Inclusive and diverse workplace</li>
                <li>Flexible working hours</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Careers;