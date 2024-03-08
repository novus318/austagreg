import React, { useEffect } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsOption } from 'react-icons/bs';
import { FaCode, FaStepForward } from 'react-icons/fa';
import { SiChainlink, SiSmart } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SolutionCard = () => {
  const services =[
      {
        "name": "Web Development Solutions",
        "description": "Comprehensive web development services tailored to your business needs.",
        "keyFeatures": [
          "Front-end and Back-end Development",
          "Responsive Design",
          "E-commerce Development"
        ]
      },
      {
        "name": "Web3 Licensing",
        "description": "Navigate the decentralized landscape with our Web3 licensing solutions.",
        "keyFeatures": [
          "Decentralized Identity Management",
          "Blockchain Licensing Solutions",
          "Smart Contracts"
        ]
      },
      {
        "name": "Blockchain Solutions",
        "description": "Harness the power of blockchain for secure and transparent transactions.",
        "keyFeatures": [
          "Distributed Ledger Technology",
          "Smart Contract Development",
          "Consensus Mechanisms"
        ]
      },
      {
        "name": "Smart Contract Development",
        "description": "Execute self-executing contracts seamlessly with our smart contract development.",
        "keyFeatures": [
          "Custom Smart Contract Development",
          "Audit and Optimization",
          "Integration Services"
        ]
      },
      {
        "name": "Process Audit Solutions",
        "description": "Our services include workflow analysis, efficiency recommendations, and compliance checks.",
        "keyFeatures": [
          "Workflow Analysis",
          "Efficiency Recommendations",
          "Compliance Checks"
        ]
      },
      {
        "name": "Vulnerability Assessment",
        "description": "Ensure the security of your digital assets with our vulnerability assessment services.",
        "keyFeatures": [
          "Penetration Testing",
          "Threat Analysis",
          "Security Patching"
        ]
      }
    ]
  
    useEffect(() => {
      gsap.from('.solution-card', {
        opacity: 0,
        y: 40,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.solution-card',
          start: 'top 90%',
        },
      });
  
  
      gsap.from('.solution-card .icon', {
        scale: 0.5,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.solution-card',
          start: 'top 90%',
        },
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill(true);
        });
      };
    }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 content-center">
    <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10 mx-auto">
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service, index) => (
          <div className="solution-card" key={index}>
            <div className="flex flex-col items-center justify-center space-y-2 border border-[#004AAD] rounded-xl p-4 hover:shadow-md transition-transform translate-y-0.5 hover:translate-y-0">
              <div className="flex items-center justify-center rounded-lg border border-[#7ED957] w-16 h-16 bg-white icon">
                {service.name === 'Web Development Solutions' && <FaCode size={24} color="#7ED957" />}
                {service.name === 'Web3 Licensing' && <SiChainlink size={24} color="#7ED957" />}
                {service.name === 'Blockchain Solutions' && <BsOption size={24} color="#7ED957" />}
                {service.name === 'Smart Contract Development' && <SiSmart size={24} color="#7ED957" />}
                {service.name === 'Process Audit Solutions' && <FaStepForward size={24} color="#7ED957" />}
                {service.name === 'Vulnerability Assessment' && <BiCheck size={24} color="#7ED957" />}
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-bold tracking-tighter text-[#004AAD]">{service.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                <div className="text-left mt-4">
                  <p className="text-sm font-bold mb-2">Key Features:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {service.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-1">
                        <svg
                          className="w-4 h-4 inline mr-2 fill-current text-[#7ED957]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-15a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V3zM9 11a1 1 0 0 1 2 0v5a1 1 0 1 1-2 0v-5zM8 2a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V2zM6 4a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0V4z"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default SolutionCard;
