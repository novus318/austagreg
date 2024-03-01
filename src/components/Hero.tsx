import React from 'react'
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <section className="items-center mont-heavy justify-center bg-white text-center overflow-hidden -z-50">
                <div className='decor'>
                    <motion.img
                        alt="Decorative pattern"
                        className="h-44 md:h-56 lg:h-72 w-auto"
                        src="/images/decor.svg"
                        style={{
                            objectFit: "cover",
                            marginTop: "90px",
                            marginLeft: "-120px",
                        }}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <motion.h1
                    className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#004AAD] leading-snug"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Charting the <span className='hallow text-transparent'>Future</span> <br />of Digital Innovation
                </motion.h1>
                <motion.p
                    className="mt-4 text-base md:text-lg lg:text-xl font-medium mont text-[#004AAD]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Stay ahead in a rapidly changing digital landscape.<br /> Austagreg provides unparalleled Web solutions for your online needs.
                </motion.p>

                <div className='decor'>
                    <motion.img
                        alt="Decorative pattern"
                        className="h-44 md:h-56 lg:h-72 w-auto ml-auto"
                        src="/images/decor.svg"
                        style={{
                            objectFit: "cover",
                            marginRight: "-220px",
                        }}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: -50 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </section>
        </>
    )
}

export default Hero