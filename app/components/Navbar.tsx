// app/components/Navbar.tsx
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Why Us', href: isHomePage ? '#why-us' : '/#why-us' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    },
    closed: {
      opacity: 0,
      transition: { when: "afterChildren" }
    }
  };

  const mobileLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    },
    closed: {
      y: 20,
      opacity: 0,
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHomePage
            ? 'bg-light/80 dark:bg-dark-card/80 backdrop-blur-lg shadow-md border-b border-border-color dark:border-dark-border'
            : 'bg-black/[0.02] backdrop-blur-sm border-b border-white/10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl sm:text-2xl font-bold transition-colors duration-300 hover:scale-105 ${
              scrolled || !isHomePage ? 'text-dark dark:text-dark-text' : 'text-white'
            }`}
          >
            Madhara <span className={`${scrolled || !isHomePage ? 'text-primary dark:text-dark-primary' : 'text-white font-medium'}`}>Service Center</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative font-medium transition-colors duration-300 ${
                  scrolled || !isHomePage
                    ? 'text-dark dark:text-dark-text hover:text-primary dark:hover:text-dark-primary'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 ease-out-expo ${
                  scrolled || !isHomePage ? 'bg-primary dark:bg-dark-primary' : 'bg-white'
                }`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
             <Link
              href={isHomePage ? '#contact' : '/#contact'}
              className="hidden sm:inline-block bg-primary dark:bg-dark-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-primary-dark dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-subtle hover:shadow-lifted"
            >
              Request Service
            </Link>
            <ThemeSwitcher />
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className={`p-2 rounded-md transition-colors duration-300 ${scrolled || !isHomePage ? 'text-dark dark:text-dark-text' : 'text-white'}`}>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-light dark:bg-dark-card p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-10">
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-dark dark:text-dark-text">
                  <CloseIcon />
                </button>
              </div>
              <motion.div className="flex flex-col space-y-7" variants={mobileMenuVariants}>
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={mobileLinkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-semibold text-dark dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors text-center block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                 <motion.div variants={mobileLinkVariants}>
                    <Link
                        href={isHomePage ? '#contact' : '/#contact'}
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-primary dark:bg-dark-primary text-white text-center mt-6 px-5 py-3 rounded-full font-semibold text-lg block"
                    >
                        Request Service
                    </Link>
                  </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;