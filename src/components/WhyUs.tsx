import React, { useEffect } from 'react'
import { BiSupport, BiSync } from 'react-icons/bi'
import { GrServices, GrUserExpert } from 'react-icons/gr'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
    useEffect(() => {
        gsap.from('.title2', {
          opacity: 0,
          x: -80,
          duration: 1,
          scrollTrigger: {
            trigger: '.title2',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    
        gsap.from('.description2', {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: '.description2',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    
        gsap.from('.feature-icon2', {
          opacity: 0,
          y: 50,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.feature-icon2',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    

    
        gsap.from('.explore-collections2', {
          opacity: 0,
          y: -80,
          duration: 1,
          scrollTrigger: {
            trigger: '.explore-collections2',
            start: 'top 97%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
              trigger.kill(true);
            });
          };
      }, []);
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mont">
    <h1 className="text-3xl font-bold text-center text-[#004AAD] mont-heavy mb-6 title2">Why Choose Austagreg?</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="flex items-center p-4 border-2 border-[#DCFCCD] rounded-lg explore-collections2">
        <GrUserExpert className="text-[#004AAD] h-10 w-10 md:h-16 md:w-16 mr-4 feature-icon2" />
        <div className='description2'>
          <span className="text-[#004AAD] font-semibold">Expertise</span>
          <p className='text-xs'>Benefit from our team with deep expertise in web development, design, and the latest Web 3 technologies. We bring a wealth of experience to every project.</p>
        </div>
      </div>
      <div className="flex items-center p-4 border-2 border-[#DCFCCD] rounded-lg explore-collections2">
        <BiSync className="text-[#004AAD] h-10 w-10 md:h-16 md:w-16 mr-4 feature-icon2" />
        <div className='description2'>
          <span className="text-[#004AAD] font-semibold">Client-Centric Approach</span>
          <p className='text-xs'>Our commitment to client satisfaction is at the core of our values. We work closely with you, ensuring our solutions align with your unique goals and vision.</p>
        </div>
      </div>
      <div className="flex items-center p-4 border-2 border-[#DCFCCD] rounded-lg explore-collections2">
        <GrServices className="text-[#004AAD] h-10 w-10 md:h-16 md:w-16 mr-4 feature-icon2" />
        <div className='description2'>
          <span className="text-[#004AAD] font-semibold">Comprehensive Services</span>
          <p className='text-xs'>From web development and design to SEO, security solutions, and process audits, we offer a comprehensive suite of services to meet all your digital needs under one roof.</p>
        </div>
      </div>
      <div className="flex items-center p-4 border-2 border-[#DCFCCD] rounded-lg explore-collections2">
        <BiSupport className="text-[#004AAD] h-10 w-10 md:h-16 md:w-16 mr-4 feature-icon2" />
        <div className='description2'>
          <span className="text-[#004AAD] font-semibold">Reliable Support</span>
          <p className='text-xs'>Count on Austagreg for reliable support throughout and beyond the project lifecycle. We are dedicated to your success and satisfaction.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhyUs