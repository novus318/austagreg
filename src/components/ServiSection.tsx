import React from 'react';
import { motion } from 'framer-motion';
import { BiCircle } from 'react-icons/bi';

const ServiSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-white pt-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-[#004AAD] mont-heavy"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Your Digital Journey with Us
        </motion.h1>
        <p className="mt-4 text-xl text-gray-600">
          Welcome to Austagreg, where we are all about making your online world secure and efficient. Think of us as your digital allies, here to simplify the complex and empower your business for success.
        </p>
        <div className="mt-10">
          <div className="border-t-4 border-[#7ED957]" />
          <motion.div
            className="flex flex-wrap justify-center bg-opacity-20 bg-[#DCFFCD] rounded-b-lg p-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 p-3 service-card" variants={fadeIn}>
              <BiCircle className="text-black mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">Web 3 Solutions</h2>
              <p className="text-sm text-gray-600 mt-1">Unlock the future with secure decentralized applications and seamless blockchain integration.</p>
            </motion.div>
            <motion.div className="text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 p-3 service-card" variants={fadeIn}>
              <BiCircle className="text-black mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">Vulnerability Assessment</h2>
              <p className="text-sm text-gray-600 mt-1">Stay ahead of threats with our thorough assessment services and security audits.</p>
            </motion.div>
            <motion.div className="text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 p-3 service-card" variants={fadeIn}>
              <BiCircle className="text-black mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">Process Audits</h2>
              <p className="text-sm text-gray-600 mt-1">Optimize your workflows and enhance productivity with our process audit solutions.</p>
            </motion.div>
            <motion.div className="text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 p-3 service-card" variants={fadeIn}>
              <BiCircle className="text-black mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">License Solutions</h2>
              <p className="text-sm text-gray-600 mt-1">Navigate licensing requirements seamlessly with our management and compliance consulting.</p>
            </motion.div>
            <motion.div className="text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/5 mb-4 p-3 service-card" variants={fadeIn}>
              <BiCircle className="text-black mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">Web Development</h2>
              <p className="text-sm text-gray-600 mt-1">Build a strong online presence with web development services customized to your needs.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiSection;
