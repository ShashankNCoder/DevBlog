import React from 'react';
import { Container } from '../../components';
import { useNavigate } from 'react-router-dom';

function Help() {
  const navigate = useNavigate(); // Add this line at the top of the component
  const helpSections = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using our platform',
      topics: [
        'Creating your first blog post',
        'Setting up your profile',
        'Understanding the dashboard',
        'Basic formatting tips'
      ]
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Quick answers to common questions',
      topics: [
        'Account management',
        'Billing and subscriptions',
        'Content guidelines',
        'Technical requirements'
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Solutions to common issues',
      topics: [
        'Login problems',
        'Publishing errors',
        'Image upload issues',
        'Performance optimization'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step visual guides',
      topics: [
        'Platform overview',
        'Advanced features',
        'SEO optimization',
        'Content management'
      ]
    }
  ];

  return (
    <Container>
      <div className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Help Center
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Find answers to your questions and learn how to make the most of our platform
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {helpSections.map((section) => (
              <div 
                key={section.title} 
                className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-lg shadow-sm hover:shadow-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{section.description}</p>
                <ul className="mt-4 space-y-2">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 cursor-pointer">
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Can't find what you're looking for?
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Help;