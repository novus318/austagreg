import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FaArrowLeft, FaBatteryFull, FaSearch, FaSignal } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';

gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  useEffect(() => {
    gsap.from('.title', {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: '.title',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.description', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.description',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.feature-icon', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.feature-icon',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.marketplace-info', {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.marketplace-info',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.explore-collections', {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: '.explore-collections',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.collection-item', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.collection-item',
        start: 'top 80%',
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
    <div className="flex justify-center items-center p-4">
      <div className="max-w-6xl w-full bg-[#dcffcd2d] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 className="text-4xl font-bold mont-heavy text-[#004AAD] title">Mobile Responsive</h2>
          <p className="mt-4 text-base mont font-normal text-black description">
            In today's digital landscape, mobile responsiveness is crucial. We prioritize creating websites and applications that seamlessly adapt to various devices. Our design and development ensure an optimal user experience, regardless of whether your audience is on a desktop, tablet, or smartphone. Embrace the future with mobile-responsive solutions that cater to the diverse ways users engage with your content.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-[#DCFFCD] bg-opacity-90 flex justify-center items-center lg:p-8 marketplace-info">
          <div className="transform rotate-12">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <FaBatteryFull className="text-[#7ED957] feature-icon" />
                <IoIosWifi className="text-[#7ED957] feature-icon" />
                <FaSignal className="text-[#7ED957] feature-icon" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <FaArrowLeft className="text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-800">NFT Marketplace</h3>
                <FaSearch className="text-gray-700" />
              </div>
              <div className="mt-6">
                <img
                  alt="Placeholder"
                  className="w-full h-auto"
                  height="200"
                  src="/images/banner.svg"
                  style={{
                    aspectRatio: "350/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </div>
              <div className="mt-4 explore-collections">
                <h4 className="text-sm font-semibold text-gray-800">Explore Our Collections</h4>
                <div className="flex mt-2 collection-item">
                  <div className="w-1/3 p-2">
                    <img
                      alt="Placeholder"
                      className="w-full h-auto rounded-lg"
                      height="80"
                      src="/images/PINC.webp"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <p className="text-xs text-center mt-1 font-semibold">PINC #9743</p>
                    <p className="text-xs text-center ">13.9 USDT</p>
                  </div>
                  <div className="w-1/3 p-2">
                    <img
                      alt="Placeholder"
                      className="w-full h-auto rounded-lg"
                      height="80"
                      src="/images/PINC2.webp"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <p className="text-xs text-center mt-1 font-semibold">PINC #7035</p>
                    <p className="text-xs text-center ">12.9 USDT</p>
                  </div>
                  <div className="w-1/3 p-2">
                    <img
                      alt="Placeholder"
                      className="w-full h-auto rounded-lg"
                      height="80"
                      src="/images/PINC3.webp"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <p className="text-xs text-center mt-1 font-semibold">PINC #2362</p>
                    <p className="text-xs text-center ">18.9 USDT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
