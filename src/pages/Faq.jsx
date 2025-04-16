import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const cardRef = useRef([]);
  const containerRef = useRef(null);

  const testimonialData = [
    {
      name: "Vamsi K.",
      title: "How do I get started with blogging?",
      review: "Start by choosing a topic you're passionate about, create an account, and use our intuitive editor to write your first post. We provide templates and guidelines to help you structure your content effectively.",
      avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Easton"
    },
    {
      name: "Leonie A.",
      title: "Can I monetize my blog posts?",
      review: "Yes! Once you build an audience, you can monetize through various channels including sponsored posts, affiliate marketing, and premium content subscriptions. We provide tools and guidance to help you maximize your earning potential.",
      avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Liliana"
    },
    {
      name: "Karl R.",
      title: "How often should I post new content?",
      review: "Consistency is key. We recommend posting at least once a week to keep your audience engaged, but quality should always come before quantity. Find a sustainable posting schedule that works for you.",
      avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Chase",
    },
    {
      name: "Dennis P.",
      title: "What makes a blog post successful?",
      review: "Successful posts typically combine engaging content, clear writing, relevant images, and SEO best practices. Focus on providing value to your readers, use compelling headlines, and engage with your audience through comments.",
      avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Brian",
    }
  ];

  useEffect(() => {
    const cards = cardRef.current;

    // Set equal heights for all cards
    const maxHeight = Math.max(...cards.map(card => card.offsetHeight));
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });

    // Initial state - cards in grid but invisible
    gsap.set(cards, {
      opacity: 0,
      scale: 0.8,
      y: 50
    });

    // Create timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 20%',
        end: 'bottom 20%',
        scrub: 0.5,
        markers: false
      }
    });

    // Animate cards in grid layout
    cards.forEach((card, i) => {
      tl.to(card, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, i * 0.2); // Increased stagger time
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="mt-10 ">
      <div ref={containerRef} className="relative min-h-[120px]">
      <div className='mt-10'></div>
      <motion.h3 
        className='text-3xl font-bold text-blue-700 text-center mb-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        You Asked, We Answered
      </motion.h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {testimonialData.map((testimonial, index) => (
            <motion.li
              key={index}
              ref={(el) => (cardRef.current[index] = el)}
              className="relative"
            >
              <div className="card bg-white rounded-lg p-6 shadow-sm h-full flex flex-col w-full h-64 object-cover hover:scale-105 transition-transform duration-300">
                <p className="text-xl font-semibold mb-2">{testimonial.title}</p>
                <p className="text-gray-600 mb-4 flex-grow">{testimonial.review}</p>
                <div className="flex items-center gap-2 mt-auto">
                  <img 
                    src={testimonial.avatarUrl}
                    alt={`Avatar of ${testimonial.name}`}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialSection;
