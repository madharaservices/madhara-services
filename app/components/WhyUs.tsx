// app/components/WhyUs.tsx
"use client";
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiStar } from 'react-icons/fi';
import Image from 'next/image';

const features = [
    { icon: FiCheckCircle, title: "Vetted Professionals", description: "All our staff undergo a rigorous screening and training process to ensure quality and reliability." },
    { icon: FiUsers, title: "Tailored to Your Needs", description: "We meticulously match the right personnel to your specific company requirements and culture." },
    { icon: FiStar, title: "Guaranteed Quality", description: "We stand by the quality of our service and are committed to your complete satisfaction." },
];

const WhyUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <section id="why-us" className="py-20 sm:py-24 bg-light dark:bg-dark-card overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">Why Choose Madhara Service Center?</h2>
                    <p className="text-muted dark:text-dark-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">The trusted choice for professional service staffing.</p>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="relative h-80 lg:h-full w-full"
                    >
                         <Image 
                            // --- CHANGE: Using local image from 'public' folder ---
                            src="/why-us.jpg" // If your image name is different, change it here.
                            alt="Professional team discussion"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl shadow-lifted"
                         />
                    </motion.div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-8"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={index} variants={itemVariants} className="flex items-start gap-5">
                                    <div className="flex-shrink-0 bg-secondary dark:bg-dark-secondary shadow-subtle text-primary dark:text-dark-primary inline-flex p-4 rounded-full mt-1">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-dark dark:text-dark-text">{feature.title}</h3>
                                        <p className="text-muted dark:text-dark-muted leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default WhyUs;