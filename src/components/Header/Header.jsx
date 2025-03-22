import React from 'react';
import { Logo, Container, LogoutBtn } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User } from 'lucide-react';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isDark, setIsDark] = React.useState(
        document.documentElement.classList.contains('dark')
    );

    const navItems = React.useMemo(() => [
      {
        name: 'Home',
        slug: "/",
        active: true
      }, 
      {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
      },
      {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
      },
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
      },
      {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
      },
    ], [authStatus]);

    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    };

    return (
      <header className='w-full py-4 bg-gradient-to-r from-blue-900 via-blue-700 to-black border-b transition-colors duration-200'>
        <Container>
          <nav className='flex items-center justify-between w-full'>
            <div className="flex items-center gap-2">
              <Logo />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors duration-200 text-white hover:text-white"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-4 font-medium">
              {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <Link
                      to={item.slug}
                      className={`inline-block px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-white ${
                        pathname === item.slug 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-accent/20'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : null
              )}
              <li>
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-white hover:bg-accent/20"
                >
                  Contact Us
                </Link>
              </li>
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
              {authStatus && (
                <li>
                  <Link
                    to="/profile"
                    className="inline-block px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-white hover:bg-accent/20"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                </li>
              )}
            </ul>

            {/* Mobile Navigation */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors duration-200"
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
                          className={`block px-4 py-2 rounded-lg font-medium ${
                            pathname === item.slug 
                              ? 'bg-primary text-primary-foreground' 
                              : 'text-foreground hover:text-foreground hover:bg-accent/20'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ) : null
                  )}
                  {authStatus && (
                    <li className="px-4">
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    );
}

export default Header;