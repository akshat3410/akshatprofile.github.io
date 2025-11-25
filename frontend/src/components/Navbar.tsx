import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from './animations/core/ScrollManager';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lenis = useLenis();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (lenis) {
      if (elem) {
        lenis.scrollTo(elem, { duration: 2.0, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else if (href === '#') {
        lenis.scrollTo(0, { duration: 2.0, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    } else {
      // Fallback if Lenis is not ready
      if (elem) {
        window.scrollTo({ top: elem.offsetTop, behavior: 'smooth' });
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold overflow-hidden">
          <Link to="/">
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="block font-heading uppercase tracking-wide"
                >
                  Akshat Soni
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-black hover:text-lime-primary transition-colors font-medium"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-gray-200 md:hidden"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-3 text-black hover:text-lime-primary transition-colors"
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
