import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive web development, web3 licensing, blockchain, smart contract, process audit, and vulnerability assessment solutions.',
    },
    {
      question: 'How can I get started?',
      answer: 'To get started, explore our solutions and contact us for a consultation. Our team will guide you through the process.',
    },
    {
      question: 'Is there customer support available?',
      answer: 'Yes, we offer dedicated customer support to assist you with any queries or issues. Feel free to reach out to our support team via email, WhatsApp or our contact form.'
    }
  ];

  useEffect(() => {
    gsap.from('.faq-section', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.faq-section',
        start: 'top 90%',
      },
    });

    gsap.from('.faq-item', {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.faq-item',
        start: 'top 80%',
      },
    });
    return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill(true);
        });
      };
  }, []);

  return (
    <section className="pb-10 faq-section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center mont-heavy text-[#004AAD]">Frequently Asked Questions</h2>
        <div className="grid gap-6">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item mx-4">
              <div className="bg-[#DCFFCD] bg-opacity-5 border p-6 rounded-lg shadow-md">
                <h3 className="text-base md:text-lg font-bold mb-2 text-[#004AAD]">{faq.question}</h3>
                <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
