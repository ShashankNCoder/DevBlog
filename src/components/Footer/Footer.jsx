import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../index';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative overflow-hidden py-10 bg-gradient-to-r from-blue-600 to-black border-t border-gray-200 dark:border-gray-700 transition-colors duration-200"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="text-white">
                    <Logo width="100px" />
                  </Link>
                </motion.div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-white/80">
                  &copy; Copyright {currentYear}. All Rights Reserved by DevBlog.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/60">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Features', path: '/' },
                  { text: 'About Us', path: '/' },
                  { text: 'Careers', path: '/' },
                  { text: 'Press Kit', path: '/' }
                ].map(({ text, path }) => (
                  <motion.li key={text} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring" }}>
                    <button
                      onClick={() => {
                        scrollToTop();
                        navigate(path);
                      }}
                      className="text-base font-medium text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {text}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/60">
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Account', path: '/' },

                  { text: 'Help', path: '/' },
                  { text: 'Contact Us', path: '/' },
                  { text: 'Customer Support', path: '/' }
                ].map(({ text, path }) => (
                  <motion.li key={text} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring" }}>
                    <button
                      onClick={() => {
                        scrollToTop();
                        navigate(path);
                      }}
                      className="text-base font-medium text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {text}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/60">
                Legals
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Terms & Conditions', path: '/' },
                  { text: 'Privacy Policy', path: '/' },
                  { text: 'Licensing', path: '/' }
                ].map(({ text, path }) => (
                  <motion.li key={text} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring" }}>
                    <button
                      onClick={() => {
                        scrollToTop();
                        navigate(path);
                      }}
                      className="text-base font-medium text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {text}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;