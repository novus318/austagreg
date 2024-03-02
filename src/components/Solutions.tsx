import React, { useEffect } from 'react';
import { AiOutlineSolution } from 'react-icons/ai';
import { BiCheck, BiGlasses } from 'react-icons/bi';
import { TbLicense } from 'react-icons/tb';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
    useEffect(() => {
        gsap.from('.title1', {
          opacity: 0,
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: '.title1',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    
        gsap.from('.description1', {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: '.description1',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    
        gsap.from('.feature-icon1', {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.feature-icon1',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
    

    
        gsap.from('.explore-collections1', {
          opacity: 0,
          y: -80,
          duration: 1,
          scrollTrigger: {
            trigger: '.explore-collections1',
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
<>
  <div className="bg-white p-5 md:p-10 mont">
    <div className="bg-white pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4 title1">
          <div className="w-8 h-16 md:w-16 md:h-32 rounded-full bg-[#7ED957]" />
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-medium text-[#004AAD] mont-heavy">Solutions We Provide</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 description1">
      <div className="bg-[#F8FDF5] pt-4 rounded-xl shadow-lg">
        <div className="">
        <div
      className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#DCFCCD] flex items-center justify-center"
      id="swpsifposk"
      style={{
        margin: "0 auto",
      }}
    >
      <AiOutlineSolution className="text-4xl text-[#004AAD] feature-icon1" />
    </div>
          <div className='p-2 md:p-4 mb-4'>
            <p>
              Empower your business with Web 3 technologies. We deliver innovative web solutions that leverage the latest advancements in decentralized systems, blockchain, and smart contracts.
            </p>
          </div>
          <div className="p-2 md:p-4 bg-[#004AAD] text-white">
            <h2 className="text-md md:text-lg font-semibold mont-heavy explore-collections1 tracking-wide">Web Solutions in Web 3</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FDF5] pt-4 rounded-xl shadow-lg">
        <div className="">
        <div
      className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#DCFCCD] flex items-center justify-center"
      id="swpsifposk"
      style={{
        margin: "0 auto",
      }}
    >
      <BiCheck className="text-4xl text-[#004AAD] feature-icon1" />
    </div>
          <div className='p-2 md:p-4 mb-4'>
            <p>
              
            Identify and mitigate potential security risks in your systems. Our comprehensive vulnerability assessment and testing services help you fortify your digital assets and protect against cyber threats.</p>
          </div>
          <div className="p-2 md:p-4 bg-[#004AAD] text-white">
            <h2 className="text-md md:text-lg font-semibold mont-heavy explore-collections1 tracking-wide">Vulnerability Assessment & Testing</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FDF5] pt-4 rounded-xl shadow-lg">
        <div className="">
           <div
      className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#DCFCCD] flex items-center justify-center"
      id="swpsifposk"
      style={{
        margin: "0 auto",
      }}
    >
      <BiGlasses className="text-4xl text-[#004AAD] feature-icon1" />
    </div>
          <div className='p-2 md:p-4 mb-4'>
            <p>
            Enhance operational efficiency with our thorough process audits. We analyze and optimize your business processes, ensuring compliance, reducing bottlenecks, and maximizing productivity.
            </p>
          </div>
          <div className="p-2 md:p-4 bg-[#004AAD] text-white">
            <h2 className="text-md md:text-lg font-semibold mont-heavy explore-collections1 tracking-wide">Process Audits</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FDF5] pt-4 rounded-xl shadow-lg">
  <div className="">
    <div
      className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#DCFCCD] flex items-center justify-center"
      id="swpsifposk"
      style={{
        margin: "0 auto",
      }}
    >
      <TbLicense  className="text-4xl text-[#004AAD] feature-icon1" />
    </div>
    <div className='p-2 md:p-4 mb-4'>
      <p>
      Our expertise lies in providing innovative, robust licensing solutions in Web 3 that harness the power of decentralized technologies, blockchain, and smart contracts.
      </p>
    </div>
    <div className="p-2 md:p-4 bg-[#004AAD] text-white">
      <h2 className="text-md md:text-lg font-semibold mont-heavy explore-collections1 tracking-wide">Licensing Solutions in Web 3</h2>
    </div>
  </div>
</div>

    </div>
  </div>
</>

  )}

export default Solutions;
