// app/components/HeroSlider.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    service: "Elderly Care",
    title: "Compassionate Elderly Care",
    description: "Professional caregivers dedicated to the well-being and comfort of your loved ones.",
    imageUrl: "/elderly-care-hero.jpg",
  },
  {
    service: "Baby Care",
    title: "Trustworthy Baby Care",
    description: "Trained nannies for a safe and nurturing environment for your children.",
    imageUrl: "/baby-care-hero.jpg",
  },
  {
    service: "Domestic Help",
    title: "Reliable Domestic Help",
    description: "Efficient staff to manage your household chores, ensuring a clean home.",
    imageUrl: "/domestic-help-hero.jpg",
  },
  {
    service: "Security Services",
    title: "Elite Security Solutions",
    description: "Highly-trained personnel for top-tier protection and peace of mind.",
    imageUrl: "/security-hero.jpg", 
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 0.8 }
  }
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = (page % slides.length + slides.length) % slides.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setTimeout(() => paginate(1), 5000);
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute inset-0 w-full h-full"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[imageIndex].imageUrl})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1, transition: { duration: 7, ease: "easeOut" } }}
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      {/* DESKTOP ONLY Side Arrows (visible from lg breakpoint upwards) */}
      <button 
        onClick={() => paginate(-1)} 
        className="hidden lg:flex absolute z-40 top-1/2 -translate-y-1/2 left-5 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 items-center justify-center"
        aria-label="Previous Slide"
      >
        <FiChevronLeft size={32} />
      </button>
      <button 
        onClick={() => paginate(1)} 
        className="hidden lg:flex absolute z-40 top-1/2 -translate-y-1/2 right-5 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 items-center justify-center"
        aria-label="Next Slide"
      >
        <FiChevronRight size={32} />
      </button>

      {/* Main content container */}
      <div className="relative z-20 container mx-auto px-6 sm:px-8 w-full h-full flex flex-col justify-end pb-44 lg:justify-center lg:pb-0">
        <motion.div 
            className="max-w-lg lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            key={imageIndex}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                variants={textItemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl"
            >
                {slides[imageIndex].title}
            </motion.h1>
            <motion.p
                variants={textItemVariants}
                className="mt-4 text-md sm:text-lg text-gray-200 drop-shadow-lg max-w-lg mx-auto lg:mx-0"
            >
                {slides[imageIndex].description}
            </motion.p>
            <motion.div
                variants={textItemVariants}
                className="mt-8"
            >
            <a 
                href="#contact" 
                className="bg-primary text-white px-8 py-3 rounded-full text-base sm:text-lg font-bold hover:bg-primary-dark transition-all duration-300 transform hover:shadow-lifted hover:scale-105 inline-block"
            >
                Request Service
            </a>
            </motion.div>
        </motion.div>
        
        {/* MOBILE & TABLET Bottom Arrows (hidden from lg breakpoint upwards) */}
        <div className="lg:hidden flex items-center justify-center space-x-12 mt-8">
            <button 
                onClick={() => paginate(-1)} 
                className="text-white/70 hover:text-white transition-colors p-2"
                aria-label="Previous Slide"
            >
                <FiChevronLeft size={28} />
            </button>
            <button 
                onClick={() => paginate(1)} 
                className="text-white/70 hover:text-white transition-colors p-2"
                aria-label="Next Slide"
            >
                <FiChevronRight size={28} />
            </button>
        </div>
      </div>
      
      {/* Progress Bars */}
      <div className="absolute z-40 flex space-x-2 bottom-28 left-1/2 -translate-x-1/2">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
                    className="relative h-1.5 w-16 md:w-20 rounded-full bg-white/30 overflow-hidden"
                    aria-label={`Go to slide ${i + 1}`}
                >
                    {/* Fill for active bar */}
                    {i === imageIndex && (
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-white"
                            key={page}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    )}
                    {/* Fill for completed/previous bars */}
                    {i < imageIndex && (
                        <div className="absolute top-0 left-0 h-full w-full bg-white" />
                    )}
                </button>
            ))}
        </div>
    </section>
  );
};

export default HeroSlider;