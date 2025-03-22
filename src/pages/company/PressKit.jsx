import React from 'react';
import { Container } from '../../components';

function PressKit() {
  const resources = [
    {
      title: 'Brand Guidelines',
      description: 'Download our comprehensive brand guidelines including logo usage, color palette, and typography.',
      downloadLink: '#'
    },
    {
      title: 'Logo Package',
      description: 'Access our logo in various formats and sizes for different use cases.',
      downloadLink: '#'
    },
    {
      title: 'Media Kit',
      description: 'Get our latest press releases, company facts, and high-resolution images.',
      downloadLink: '#'
    },
    {
      title: 'Brand Assets',
      description: 'Download official screenshots, product images, and other visual assets.',
      downloadLink: '#'
    }
  ];

  return (
    <Container>
      <div className="py-8 min-h-screen bg-gradient-to-br from-blue-900 to-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Press Kit
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Download official brand assets and press materials
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {resources.map((resource) => (
              <div key={resource.title} className="p-6 border dark:border-gray-700 rounded-lg bg-gradient-to-br from-blue-900 to-black">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{resource.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{resource.description}</p>
                <a
                  href={resource.downloadLink}
                  className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Download
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Need something specific? Contact our media relations team
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PressKit;