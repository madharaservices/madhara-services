// app/about/AboutPageContent.tsx
"use client"; // Animations තියෙන නිසා මේක client component එකක්

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiEye, FiAward, FiHeart, FiShield, FiSmile } from 'react-icons/fi';


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // පොඩි delay එකක් එක්ක elements පෙන්නනවා
      delayChildren: 0.1,
    },
  },
};


const fadeInUp = {
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


const AboutPageContent = () => {
  return (
   <div className="overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center text-white bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
            src="/why-us.jpg" 
            layout="fill" 
            objectFit="cover" 
            alt="Madhara Services Team Collaboration" 
            className="opacity-25" // Opacity එක අඩු කළා
            priority
          />
          {/* Gradient overlay එක තව ටිකක් smooth කරනවා */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center p-6 max-w-4xl mx-auto" // Max width එකක් දුන්නා ලොකු screens වල ලස්සනට තියෙන්න
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4" // Font size එක පොඩ්ඩක් ලොකු කළා
          >
            About Madhara Services
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-dark-text/80" // Text එකේ opacity එක පොඩ්ඩක් අඩු කළා
          >
            Bringing care, comfort, safety, and peace of mind to families who want the very best.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Our Story Section - වැඩිපුර ඉඩකඩ සහිතව */}
      <section className="py-20 md:py-32 bg-light dark:bg-dark-card">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center" // Gap එක වැඩි කළා
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* වම් පැත්ත: Title එක */}
            <motion.div className="lg:col-span-2" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-dark-text mb-5"> {/* Margin bottom වැඩි කළා */}
                Our Journey
              </h2>
              {/* Highlight line එක පොඩ්ඩක් මහත් කළා */}
              <div className="h-2 w-28 bg-primary dark:bg-dark-primary rounded-full" />
            </motion.div>
            
            {/* දකුණු පැත්ත: ඔබ ලබාදුන් text එක ( වැඩිපුර ඉඩ ) */}
            <motion.div className="lg:col-span-3 space-y-6" variants={fadeInUp}> {/* Space-y වැඩි කළා */}
              <p className="text-lg md:text-xl text-muted dark:text-dark-muted leading-relaxed md:leading-loose"> {/* Line height එක adjust කළා */}
                Madhara Services was founded with a simple yet powerful mission — to bring <strong className="font-semibold text-dark dark:text-dark-text">care, comfort, safety, and peace of mind</strong> to families who want the very best for their loved ones and their homes.
              </p>
              <p className="text-base md:text-lg text-muted dark:text-dark-muted leading-relaxed md:leading-loose"> {/* Line height එක adjust කළා */}
                We understand that caring for the elderly, babies, or those recovering from illness — while ensuring a secure environment — can be both a joy and a challenge. Life’s responsibilities can make it hard to be there every moment, and that’s where we step in. Madhara Services was created to be an extra pair of hands, a compassionate heart, and a trusted companion when you need it most.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Principles Section - Cards වලට වැඩි දියුණු කළ styling */}
      <section className="py-20 md:py-32 bg-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto" // Content එක මැදට ගත්තා
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-dark-text mb-5">Our Core Principles</h2>
            <p className="text-lg md:text-xl text-muted dark:text-dark-muted">
              Our journey began with the belief that everyone deserves high-quality, dependable care and protection.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16 md:mt-20" // Gap සහ Margin top වැඩි කළා
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Card 1: Care (Hover effect එකක් එක්ක) */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }} // පොඩි hover effect එකක්
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-light dark:bg-dark-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border-color dark:border-dark-border cursor-default" // Shadow එක වැඩි කළා
            >
              <div className="bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary inline-flex p-5 rounded-full mb-8 ring-8 ring-primary/5 dark:ring-dark-primary/10"> {/* Icon එක ලොකු කළා */}
                <FiHeart size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-dark dark:text-dark-text">Compassionate Care</h3>
              <p className="text-base text-muted dark:text-dark-muted leading-relaxed">
                Helping a senior maintain independence or ensuring a baby’s comfort and happiness.
              </p>
            </motion.div>

            {/* Card 2: Security */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-light dark:bg-dark-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border-color dark:border-dark-border cursor-default"
            >
              <div className="bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary inline-flex p-5 rounded-full mb-8 ring-8 ring-primary/5 dark:ring-dark-primary/10">
                <FiShield size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-dark dark:text-dark-text">Trusted Security</h3>
              <p className="text-base text-muted dark:text-dark-muted leading-relaxed">
                Protecting your home and loved ones with professionals trained in diligence and integrity.
              </p>
            </motion.div>

            {/* Card 3: Peace of Mind */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-light dark:bg-dark-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border-color dark:border-dark-border cursor-default"
            >
              <div className="bg-primary/10 dark:bg-dark-primary/20 text-primary dark:text-dark-primary inline-flex p-5 rounded-full mb-8 ring-8 ring-primary/5 dark:ring-dark-primary/10">
                <FiSmile size={32} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-dark dark:text-dark-text">Peace of Mind</h3>
              <p className="text-base text-muted dark:text-dark-muted leading-relaxed">
                Giving you the confidence and peace of mind you truly deserve, at affordable prices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Mission & Vision Section - Cards වලට වැඩි ඉඩක් */}
      <section className="py-20 md:py-32 bg-light dark:bg-dark-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch"> {/* Gap එක වැඩි කළා */}
            
            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              className="bg-secondary dark:bg-dark-secondary p-10 md:p-14 rounded-2xl shadow-md border border-border-color dark:border-dark-border flex flex-col" // Padding වැඩි කළා
            >
              <div className="mb-6"> {/* Margin bottom වැඩි කළා */}
                <FiEye className="text-primary dark:text-dark-primary" size={44} /> {/* Icon එක ලොකු කළා */}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-dark-text mb-5"> {/* Font size සහ margin වැඩි කළා */}
                Our Vision
              </h3>
              <p className="text-lg text-muted dark:text-dark-muted leading-relaxed flex-grow"> {/* flex-grow එකතු කළා cards සමාන උසකට එන්න */}
                To be the most trusted provider of care and security services, empowering families and communities to live with confidence, comfort, and peace of mind.
              </p>
            </motion.div>

            {/* Mission Card (High Contrast) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              className="bg-primary dark:bg-dark-primary p-10 md:p-14 rounded-2xl shadow-lg text-white flex flex-col" // Padding සහ shadow වැඩි කළා
            >
              <div className="mb-6">
                <FiAward className="text-white" size={44} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                Our Mission
              </h3>
              <p className="text-lg text-white/90 leading-relaxed flex-grow"> {/* flex-grow එකතු කළා */}
                To deliver compassionate, reliable, and professional care and security solutions that enhance quality of life, protect what matters most, and build lasting trust through empathy, excellence, and integrity in every service we provide.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Our Commitment Section - අවසාන statement එකට වැඩි අවධානයක් */}
      <section className="py-20 md:py-32 bg-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer} // stagger දානවා
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark dark:text-dark-text mb-8" // Margin bottom වැඩි කළා
            >
              Our Commitment to You
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="space-y-6 text-lg md:text-xl text-muted dark:text-dark-muted leading-relaxed md:leading-loose" // Font size, space, line height වැඩි කළා
            >
              <p>
                Every member of our team — from caregivers and nannies to security professionals — is trained to serve with <strong className="font-semibold text-dark dark:text-dark-text">empathy, diligence, and integrity</strong>. Whether it’s helping a senior maintain independence, ensuring a baby’s comfort and happiness, supporting someone in recovery, or protecting your home and loved ones, we bring dignity, reliability, and dedication to every service we offer.
              </p>
              <p>
                At Madhara Services, our story is about people — about helping you take care of those who matter most, safeguarding what you value, and giving you the peace of mind you truly deserve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPageContent;