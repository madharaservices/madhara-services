// app/components/Testimonials.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonials = [
  {
    quote: "Madhara Service Center transformed our facility's staffing. Their caregivers are not only professional but truly compassionate. Highly recommended for elderly care.",
    name: "S. Perera",
    company: "Director, Sunshine Elder Homes",
  },
  {
    quote: "The security personnel provided were top-notch. Their professionalism and attention to detail gave us the peace of mind we needed. A truly elite service.",
    name: "R. Silva",
    company: "CEO, Innovate Tech",
  },
  {
    quote: "Finding reliable domestic help was always a challenge until we partnered with Madhara. Their staff are efficient, trustworthy, and have been a great asset.",
    name: "A. Fernando",
    company: "Operations Manager, Colombo Suites",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const testimonialIndex = (page % testimonials.length + testimonials.length) % testimonials.length;

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-secondary dark:bg-dark-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">What Our Clients Say</h2>
          <p className="text-muted dark:text-dark-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">Real stories from partners who trust our services.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto h-80 sm:h-64 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute w-full px-10 text-center"
            >
              <FiMessageSquare className="mx-auto text-primary dark:text-dark-primary mb-4" size={40} />
              <p className="text-lg sm:text-xl italic text-dark dark:text-dark-text">"{testimonials[testimonialIndex].quote}"</p>
              <p className="mt-4 font-bold text-dark dark:text-dark-text">{testimonials[testimonialIndex].name}</p>
              <p className="text-sm text-muted dark:text-dark-muted">{testimonials[testimonialIndex].company}</p>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <FiChevronLeft className="text-dark dark:text-dark-text" size={24} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <FiChevronRight className="text-dark dark:text-dark-text" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;