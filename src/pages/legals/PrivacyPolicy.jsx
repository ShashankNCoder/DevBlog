import React from 'react';
import { Container } from '../../components';

function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, including personal information such as name, email address, and profile information when you register for an account.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not share your personal information with third parties except as described in this privacy policy or with your consent.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your information.'
    }
  ];

  return (
    <Container>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            How we collect, use, and protect your information
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
              If you have any questions about our Privacy Policy, please contact us
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PrivacyPolicy;