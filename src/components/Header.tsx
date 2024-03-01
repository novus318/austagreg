    import Link from 'next/link';
    import React, { useState, useEffect } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';

    const Header = () => {
        const [scrolled, setScrolled] = useState(false);
        const [currentPage, setCurrentPage] = useState('');
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const controls = useAnimation();

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        useEffect(() => {
            // Get the current page path
            const path = window.location.pathname;
            setCurrentPage(path);
        }, []);

        const isCurrentPage = (path: string) => {
            return currentPage === path;
        };

        const handleToggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
    
        return (
  <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`flex mont-heavy items-center justify-between px-4 py-2 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        } ${isMenuOpen ? 'bg-white' : ''}`}
      >
    <Link href='/'>
    <img src="/images/logo.svg" alt="Logo" className="ml-4 w-auto h-12 md:h-16 lg:h-20" /></Link>
    <div className="block lg:hidden">
          <motion.button
            onClick={handleToggleMenu}
            className="text-[#004AAD] focus:outline-none transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }}
          >
            {isMenuOpen ? (
              <AiOutlineMenuUnfold className="h-6 w-6" />
            ) : (
              <AiOutlineMenuFold className="h-6 w-6" />
            )}
          </motion.button>
        </div>
    <nav className={`hidden lg:flex items-center mr-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex space-x-10">
            <li>
                <Link href="/" passHref className={`flex items-center font-medium text-[#004AAD] hover:text-[#7ED957] ${
                    isCurrentPage('/') ? 'text-[#7ED957]' : ''
                }`}>
                    <span className="text-lg tracking-wider hover:border-b-2 border-[#004AAD] transition-all duration-75 ease">Brief</span>
                </Link>
            </li>
            <li>
                <Link href="/solutions" passHref className={`flex items-center font-medium text-[#004AAD] hover:text-[#7ED957] ${
                    isCurrentPage('/solutions') ? 'text-[#7ED957]' : ''
                }`}>
                    <span className="text-lg tracking-wider hover:border-b-2 border-[#004AAD] transition-all duration-75 ease">
                        Solutions
                    </span>
                </Link>
            </li>
            <li>
                <Link href="/services" passHref className={`flex items-center font-medium text-[#004AAD] hover:text-[#7ED957] ${
                    isCurrentPage('/services') ? 'text-[#7ED957]' : ''
                }`}>
                    <span className="text-lg tracking-wider hover:border-b-2 border-[#004AAD] transition-all duration-75 ease">Services</span>
                </Link>
            </li>
            <li>
                <Link href="/contact" passHref className={`flex items-center font-medium text-[#004AAD] hover:text-[#7ED957] ${
                    isCurrentPage('/contact') ? 'text-[#7ED957]' : ''
                }`}>
                    <span className="text-lg tracking-wider hover:border-b-2 border-[#004AAD] transition-all duration-75 ease">Write Us</span>
                </Link>
            </li>
        </ul>
    </nav>
    </motion.header>
{isMenuOpen && (
      <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      className="lg:hidden bg-white flex flex-col mont-heavy tracking-widest text-left px-4"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5 }}
        className="link-item"
      >
        <Link href="/" passHref className={`text-[#004AAD] hover:text-[#7ED957] ${isCurrentPage('/') ? 'text-[#7ED957]' : ''}`}>
          Brief
        </Link>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, delay: 0.1 }}
        className="link-item"
      >
        <Link href="/solutions" passHref className={`text-[#004AAD] hover:text-[#7ED957] ${isCurrentPage('/solutions') ? 'text-[#7ED957]' : ''}`}>
          Solutions
        </Link>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="link-item"
      >
        <Link href="/services" passHref className={`text-[#004AAD] hover:text-[#7ED957] ${isCurrentPage('/services') ? 'text-[#7ED957]' : ''}`}>
          Services
        </Link>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
        className="link-item"
      >
        <Link href="/contact" passHref className={`text-[#004AAD] hover:text-[#7ED957] ${isCurrentPage('/contact') ? 'text-[#7ED957]' : ''}`}>
          Write Us
        </Link>
      </motion.div>
    </motion.div>
)}

        </>
        );
    };

    export default Header;