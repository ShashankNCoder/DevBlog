import React from 'react';
import { Container } from '../../components';

function Licensing() {
  const sections = [
    {
      title: 'Software License',
      content: 'Our software is licensed under standard terms that grant users specific rights while protecting our intellectual property.'
    },
    {
      title: 'Content License',
      content: 'All content published on our platform remains the intellectual property of their respective authors while granting us a license to display and distribute it.'
    },
    {
      title: 'Usage Terms',
      content: 'Users are granted a non-exclusive, non-transferable license to use our platform and services in accordance with our terms and conditions.'
    },
    {
      title: 'Restrictions',
      content: 'Users may not copy, modify, distribute, sell, or lease any part of our services or included software without permission.'
    },
    {
      title: 'Third-Party Licenses',
      content: 'Our platform may include third-party software or content that is subject to separate license terms, which we acknowledge and respect.'
    }
  ];

  return (
    <Container>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Licensing Information
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Understanding our software and content licensing terms
          </p>
        </div>

        <div className="mt-20">
          <div className="space-y-8">
            {sections.map((section) => (
              <div 
                key={section.title} 
                className="p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-lg shadow-sm hover:shadow-lg hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 text-white/80 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/70">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mt-4 text-sm text-white/70">
              For any licensing inquiries, please contact our support team
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Licensing;