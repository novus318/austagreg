import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Vision = () => {
  const containerAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const textAnimation = useAnimation();
  const listAnimation = useAnimation();

  useEffect(() => {
    const animateOnLoad = async () => {
      await containerAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await imageAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await textAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await listAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    };

    animateOnLoad();
  }, [containerAnimation, imageAnimation, textAnimation, listAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={containerAnimation}
    >
      <motion.img
        src="/images/vision&mission.svg"
        alt="Vision and Mission"
        className="h-32 -ml-2"
        initial={{ opacity: 0, y: 20 }}
        animate={imageAnimation}
      />
      <motion.div className="lg:p-10 mont">
        <div className="flex flex-col lg:flex-row justify-between ">
          <motion.div className="flex-1 px-2 md:px-4 lg:px-10" initial={{ opacity: 0, y: 20 }} animate={textAnimation}>
        <p className="text-base mb-4">
          To create a digital future where businesses flourish and connect meaningfully. Austagreg is committed to being a beacon of innovation in South East Asia, making advanced web solutions accessible and empowering for everyone. We envision a world where technology enhances human experiences, fosters growth, and builds lasting connections.
        </p>
        <p className="text-lg">
          To be the leading innovator in Web 3 solutions, empowering businesses with technologies and unparalleled digital experiences.
        </p>
          </motion.div>
          <motion.div className="flex-1 mt-5 lg:mt-0 px-2 md:px-4 lg:px-10" initial={{ opacity: 0, y: 20 }} animate={textAnimation}>
        <motion.ul
          className="list-disc pl-5 text-base font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={listAnimation}
        >
          <motion.li className="mb-2">
            Innovate: Drive innovation in web solutions for businesses in South East Asia.
          </motion.li>
          <motion.li className="mb-2">
            Empower Clients: Provide comprehensive, accessible, and client-focused services for digital success.
          </motion.li>
          <motion.li className="mb-2">
            Excellence Across Services: Strive for excellence in web development, SEO, branding, and security.
          </motion.li>
          <motion.li className="mb-2">
            Holistic Transformation: Offer a holistic approach to digital transformation, ensuring online presence, security, and compliance.
          </motion.li>
          <motion.li className="mb-2">
            Build Community: Foster lasting connections and collaboration for a positive digital ecosystem.
          </motion.li>
          <motion.li>
            Global Influence: Aspire to make a global impact by setting new standards in web solutions.
          </motion.li>
        </motion.ul>
          </motion.div>
        </div>
      </motion.div>
        </motion.div>
      );
};

export default Vision;
