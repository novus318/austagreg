import FAQSection from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import SolutionCard from '@/components/SolutionCard'

import WhereTo from '@/components/WhereTo'
import React, { useEffect } from 'react'

import { gsap } from 'gsap';
import { Transition } from 'react-transition-group';

const Solution = () => {
  useEffect(() => {
    gsap.from('.cta-section', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
    });

    gsap.from('.cta-button', {
      opacity: 0,
      x: -20,
      duration: 0.8,
      delay: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-button',
        start: 'top 90%',
      },
    });
  }, []);

  const handleEnter = (node:any) => {
    gsap.from(node, { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' });
  };

  return (
   <>
    <Layout
    image='https://www.austagreg.com/ogimage.png'
    title="Innovative Web Devlopment Solutions by Austagreg"
    description="Explore cutting-edge Web 3 solutions at Austagreg. Revolutionize your digital experience with our secure and innovative services. Elevate your online presence with our expertise."
    keywords="Web 3 solutions, digital innovation, secure online experience, Austagreg services, web developer, web developement,singapore"
    author="Muhammed Nizamudheen M"
    canonicalUrl="https://www.austagreg.com/solutions"
    >
   <Header/>
   <WhereTo/>
   <Transition in={true} timeout={300} onEnter={handleEnter}>
      <section className="bg-[#004AAD] text-white py-16 mont cta-section">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 mont-heavy">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6">Explore our solutions and take your business to the next level.</p>
          <a href="https://wa.me/+6598379110" target="_blank" rel="noopener noreferrer">
            <button className="cta-button bg-[#7ED957] text-[#004AAD] py-2 px-6 rounded-full font-semibold text-lg hover:bg-white hover:text-[#004AAD] transition duration-300">
              Get Started
            </button>
          </a>
        </div>
      </section>
    </Transition>
   <SolutionCard/>
   <FAQSection/>
   <Footer/>
   </Layout>
   </>
  )
}

export default Solution