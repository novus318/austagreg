import React, { useRef, useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

const ContactIcons = () => {
  const iconsRef = useRef(null);

  useEffect(() => {
    gsap.set(iconsRef.current, { x: '300%' });

    gsap.fromTo(iconsRef.current, { x: '300%' }, { x: '0%', duration: 1, ease: 'power2.out' });
  }, []);
  return (
    <>
      <a
        href="https://wa.me/+6598379110"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-3 bg-[#DCFFCD] text-[#004AAD] text-lg lg:text-xl xl:text-2xl rounded-full p-3 shadow-md hover:text-[#DCFFCD] hover:bg-[#004AAD] transition-transform transform hover:scale-110 focus:outline-none"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </>
  );
};

export default ContactIcons;
