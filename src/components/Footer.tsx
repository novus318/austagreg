import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#F8FDF5] py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="mb-6 md:mb-0 px-10">
            <div className="">
              <Link href='/'>
                <img src="/images/logo.svg" alt="logo" className='h-10' />
              </Link>
              <p className="text-sm text-center md:text-left text-gray-600 mt-2">
                Austagreg offers comprehensive Web 3 solutions, vulnerability assessment, process audits, license solutions, and more. Explore our services for a secure and efficient online presence.
              </p>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between col-span-2">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-600">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="hover:text-gray-600">
                  <FaTelegram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-gray-600">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/company/austagregsg/" target='_blank' className="hover:text-gray-600">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
  
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <a href='mailto:info@austagreg.com' target='_blank' className="text-gray-600 flex items-center mb-4">
                <FaEnvelope className="text-xl mr-2" />
                info@austagreg.com
              </a>
              <Link href="/privacy">
                <span className="text-gray-600 hover:text-gray-800">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
  
        <div className="mt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 Austagreg. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
