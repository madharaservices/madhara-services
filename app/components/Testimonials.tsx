// app/components/Testimonials.tsx
"use client";
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

// ඔබ ලබාදුන් අලුත් testimonials
const testimonials = [
  {
    quote: "We had tried other care agencies, but none matched the level of service and affordability that Madhara Services provides. Their transparent pricing and professionalism really stood out. We finally found a care team we can trust.",
    name: "S. Perera",
    company: "Director, Sunshine Elder Homes",
  },
  {
    quote: "As a first-time mother, I was nervous about leaving my baby even for a short time. The nanny from Madhara Services was wonderful — calm, caring, and experienced. She gave me the peace of mind I needed to return to work with confidence.",
    name: "R. Silva",
    company: "CEO, Innovate Tech",
  },
  {
    quote: "We hired Madhara Services for post-surgery care, and the experience was excellent. The caregiver was always on time, attentive, and made recovery so much easier. Highly recommend for anyone needing reliable home care.",
    name: "A. Fernando",
    company: "Operations Manager, Colombo Suites",
  },
];

// --- Animation Variants ---

// මුළු section එක fade වෙලා උඩට එන animation එක
const sectionFadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

// Cards ටික එකින් එක උඩට එන animation එක
const cardStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // පොඩි delay එකක් එක්ක cards පෙන්නනවා
      delayChildren: 0.2,
    },
  },
};

// එක card එකක් උඩට එන animation එක
const cardFadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary dark:bg-dark-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionFadeInUp} // මුළු title එකට animation එකක්
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">What Our Clients Say</h2>
          <p className="text-lg text-muted dark:text-dark-muted mt-4 max-w-2xl mx-auto">Real stories from partners who trust our services.</p>
        </motion.div>

        {/* Testimonials Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" // Grid layout එක (md වල 2යි, lg වල 3යි)
          variants={cardStaggerContainer} // Cards ටික stagger වෙන්න
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // පොඩි ප්‍රමාණයක් පෙනුනත් animation එක start වෙනවා
        >
          {/* testimonials list එක map කරලා cards හදනවා */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardFadeInUp} // එක card එකකට animation එක
              className="bg-light dark:bg-dark-card p-6 lg:p-8 rounded-xl shadow-lg border border-border-color dark:border-dark-border h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300" // Card styling, hover effect
            >
              <div>
                <FiMessageSquare className="text-primary dark:text-dark-primary mb-5" size={32} /> {/* Icon size, margin */}
                <p className="text-base italic text-dark dark:text-dark-text mb-6 leading-relaxed"> {/* Font size, margin, line height */}
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-border-color/50 dark:border-dark-border/50"> {/* Padding top, margin top */}
                <p className="text-base font-semibold text-dark dark:text-dark-text">{testimonial.name}</p> {/* Font size */}
                <p className="text-sm text-muted dark:text-dark-muted">{testimonial.company}</p> {/* Font size */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;