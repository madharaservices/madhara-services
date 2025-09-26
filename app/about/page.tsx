// app/about/page.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiEye, FiUsers } from 'react-icons/fi';

const teamMembers = [
    { name: 'Nimali Silva', title: 'Founder & CEO', image: '/team/member1.jpg' },
    { name: 'Kasun Rathnayake', title: 'Head of Operations', image: '/team/member2.jpg' },
    { name: 'Fathima Rizwan', title: 'Client Relations Manager', image: '/team/member3.jpg' },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-800 text-white">
        <Image src="/why-us.jpg" layout="fill" objectFit="cover" alt="Our Team" className="absolute inset-0 opacity-40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">About Madhara Service Center</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Your trusted partner in professional staffing solutions since 2010.</p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-light dark:bg-dark-card">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-dark dark:text-dark-text mb-4">Our Story</h2>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
                Founded with a simple yet powerful mission: to bridge the gap between businesses seeking reliable, skilled professionals and individuals seeking meaningful employment. We started as a small team with a big vision, and have grown into a leading name in Sri Lanka's staffing industry, built on a foundation of trust, integrity, and unwavering commitment to quality.
            </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary dark:bg-dark-secondary">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                  >
                      <FiEye className="mx-auto text-primary dark:text-dark-primary mb-4" size={40} />
                      <h3 className="text-2xl font-bold text-dark dark:text-dark-text mb-2">Our Vision</h3>
                      <p className="text-muted dark:text-dark-muted">To be the most trusted and respected staffing agency in the region, known for our exceptional service and positive impact on the communities we serve.</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                      <FiAward className="mx-auto text-primary dark:text-dark-primary mb-4" size={40} />
                      <h3 className="text-2xl font-bold text-dark dark:text-dark-text mb-2">Our Mission</h3>
                      <p className="text-muted dark:text-dark-muted">To empower businesses by providing highly skilled and reliable personnel, while creating life-changing employment opportunities for our candidates.</p>
                  </motion.div>
              </div>
          </div>
      </section>

       {/* (Optional) Meet The Team Section - You will need to add images to public/team/ folder */}
       {/* <section className="py-20 bg-light dark:bg-dark-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-dark-text mb-12">Meet Our Leaders</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <Image src={member.image} layout="fill" objectFit="cover" alt={member.name} />
                </div>
                <h4 className="text-xl font-bold text-dark dark:text-dark-text">{member.name}</h4>
                <p className="text-primary dark:text-dark-primary">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
      */}
    </div>
  );
};

export default AboutPage;