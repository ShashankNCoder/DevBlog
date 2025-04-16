import React from 'react';
import { Logo, Container } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = React.useMemo(() => [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "Blogs",
        slug: "/all-posts",
        active: true
      },
      {
        name: "Contact Us",
        slug: "/contact",
        active: true
      },
      {
        name: "Signup",
        slug: "/signup",
        active: true
      },
    ], []);

    return (
      <>
        <header className='w-full py-4 bg-gradient-to-r from-blue-900/100 via-blue-700/100 to-black/50 backdrop-blur-sm border-b border-white/10 transition-colors duration-200 fixed top-0 z-50'>
          <Container>
            <nav className='flex items-center justify-between w-full'>
              <div className="flex items-center gap-2">
                <Logo />
              </div>
  
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center gap-4 font-medium">
                {navItems.map((item) => 
                  item.active ? (
                    <li key={item.name}>
                      <Link
                        to={item.slug}
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-muted-foreground transition-colors hover:text-gray-700 relative group ${pathname === item.slug ? 'bg-primary text-white shadow-primary/50 bg-white-400 group-hover:w-full transition-all duration-300': 'hover:bg-accent/20 hover:text-white shadow-blue-900/50'}`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : null
                )}
                <li>
                  <Link
                    to="/profile"
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${pathname === '/profile' ? 'bg-primary text-white shadow-primary/50' : 'hover:bg-accent/20 hover:text-white shadow-blue-900/50'}`}
                  >
                    <User className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
  
              {/* Mobile Navigation */}
              <button
                className="md:hidden p-2 rounded-lg text-muted-foreground relative group hover:text-amber-500 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </nav>
  
            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden"
                >
                  <ul className="pt-4 pb-3 space-y-2 font-medium">
                    {navItems.map((item) => 
                      item.active ? (
                        <li key={item.name}>
                          <Link
                            to={item.slug}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 rounded-lg font-medium border-2 shadow-lg hover:shadow-xl ${pathname === item.slug ? 'bg-primary text-primary-foreground border-primary shadow-primary/50' : 'text-foreground border-blue-700/50 hover:text-foreground hover:bg-accent/20 hover:border-blue-500 shadow-blue-900/50'}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ) : null
                    )}

                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </header>
        <div className="h-16"></div> {/* This creates space for the fixed header */}
      </>
    );
}

export default Header;