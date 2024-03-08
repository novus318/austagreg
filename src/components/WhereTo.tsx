import React, { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Transition } from 'react-transition-group';

gsap.registerPlugin(ScrollTrigger);

const WhereTo = () => {
  useEffect(() => {
    gsap.from('.start-section', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.start-section',
        start: 'top 80%',
      },
    });

    gsap.from('.start-item', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.start-item',
        start: 'top 80%',
      },
    });

    gsap.to('.arrow', {
      y:10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    });
  }, []);

  const handleEnter = (node:any) => {
    gsap.from(node, { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' });
  };

  return (
    <Transition in={true} timeout={500} onEnter={handleEnter}>
      <div className="bg-[#DCFFCD] bg-opacity-30 pt-32 px-4 sm:px-6 lg:px-8 pb-10 start-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-[#004AAD] mb-12 mont-heavy">Where to start</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="start-item bg-[#7ED957] p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-white font-semibold mb-2">Explore Our Solutions</h3>
              <p className="text-sm text-gray-700 mb-4">
                Discover our range of web solutions tailored to meet your specific needs. From stunning websites to powerful web applications, we have you covered.
              </p>
              <BsArrowRight className="text-black arrow" />
            </div>
            <div className="start-item bg-[#7ED957] p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-white font-semibold mb-2">Consultation & Planning</h3>
              <p className="text-sm text-gray-700 mb-4">
                Schedule a consultation with our experts. We will discuss your goals, analyze your requirements, and formulate a strategic plan to achieve success.
              </p>
              <BsArrowRight className="text-black arrow" />
            </div>
            <div className="start-item bg-[#7ED957] p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-white font-semibold mb-2">Get a Quote</h3>
              <p className="text-sm text-gray-700 mb-4">
                Request a personalized quote based on your project scope. Our transparent pricing ensures you know exactly what to expect, with no hidden costs.
              </p>
              <BsArrowRight className="text-black arrow" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default WhereTo;
