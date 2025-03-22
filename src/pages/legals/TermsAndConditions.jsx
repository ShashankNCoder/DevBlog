import React from 'react';
import { Container } from '../../components';

function TermsAndConditions() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'User Account',
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.'
    },
    {
      title: 'Content Guidelines',
      content: 'Users are solely responsible for the content they publish. Content must not violate any applicable laws or regulations.'
    },
    {
      title: 'Intellectual Property',
      content: 'The website and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.'
    }
  ];

  return (
    <Container>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Please read these terms and conditions carefully before using our platform
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
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TermsAndConditions;