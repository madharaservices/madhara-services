// app/components/Services.tsx
"use client";
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaUserShield, FaBaby, FaHome, FaUserFriends } from 'react-icons/fa';
import { IconType } from 'react-icons';

const serviceData = [
  { icon: FaUserFriends, title: "Elderly Care", description: "Compassionate and professional caregivers for seniors." },
  { icon: FaBaby, title: "Baby Care", description: "Trained and trustworthy nannies for your little ones." },
  { icon: FaHome, title: "Domestic Help", description: "Reliable staff for all your household chores." },
  { icon: FaUserShield, title: "Security Services", description: "Elite, experienced personnel for top-tier protection." },
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="relative z-10 bg-secondary dark:bg-dark-secondary -mt-10 md:-mt-20 rounded-t-[3rem] py-20 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">Our Professional Services</h2>
          <p className="text-muted dark:text-dark-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">We provide a range of specialized services tailored to your company's needs.</p>
        </motion.div>
        
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceData.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- WOW Factor Service Card ---
const ServiceCard = ({ icon: Icon, title, description }: { icon: IconType; title: string; description: string; }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                mouseX.set(-1);
                mouseY.set(-1);
            }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
            }}
            className="group relative bg-light dark:bg-dark-card p-8 rounded-2xl border border-border-color dark:border-dark-border shadow-subtle transition-all duration-300 hover:shadow-lifted hover:-translate-y-2"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
                    ),
                }}
            />
            
            <div className="text-center relative z-10">
                <div className="bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary inline-flex p-4 rounded-full mb-6 ring-8 ring-primary/5 dark:ring-dark-primary/10 transition-all duration-300 group-hover:scale-110">
                    <Icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-dark dark:text-dark-text">{title}</h3>
                <p className="text-muted dark:text-dark-muted leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default Services;