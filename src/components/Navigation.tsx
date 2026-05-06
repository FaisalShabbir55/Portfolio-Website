import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useOwnerData } from '../contexts/DataContext';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const data = useOwnerData();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <motion.div 
                className="logo-wrapper"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 20, 
                  rotateX: -10,
                  perspective: 1000 
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <img src="/images/monogram.png" alt="FS" className="logo-icon" />
                <span className="logo-text">
                  <span className="first-name">Faisal</span>
                  <span className="last-name">Shabbir</span>
                </span>
              </motion.div>
            </Link>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <ThemeToggle />
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={navLinks}
            isActive={isActive}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

interface MobileMenuProps {
  links: Array<{ path: string; label: string }>;
  isActive: (path: string) => boolean;
  onClose: () => void;
}

const MobileMenu = ({ links, isActive, onClose }: MobileMenuProps) => {
  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.ul
        className="mobile-menu-links"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {links.map((link, index) => (
          <motion.li
            key={link.path}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={onClose}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <div className="mobile-menu-actions">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default Navigation;

