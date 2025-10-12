// app/components/Footer.tsx
"use client";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const footerSections = [
    {
        title: 'Quick Links',
        links: [
            { name: 'Services', href: '#services' },
            { name: 'Why Us', href: '#why-us' },
            { name: 'Contact Us', href: '#contact' },
        ],
    },
    {
        title: 'Our Services',
        links: [
            { name: 'Elderly Care', href: '#services' },
            { name: 'Baby Care', href: '#services' },
            { name: 'Domestic Help', href: '#services' },
            { name: 'Security Services', href: '#services' },
        ],
    },
];

const socialLinks = [
    { icon: FaFacebookF, href: '#', 'aria-label': 'Facebook' },
    { icon: FaTwitter, href: '#', 'aria-label': 'Twitter' },
    { icon: FaLinkedinIn, href: '#', 'aria-label': 'LinkedIn' },
    { icon: FaInstagram, href: '#', 'aria-label': 'Instagram' },
];

const contactDetails = [
    { icon: FiMapPin, text: '123 Main Street, Colombo' },
    { icon: FiPhone, text: '+94 76 577 8129' },
    { icon: FiMail, text: 'contact@madhara.com' },
]

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <footer className="bg-secondary dark:bg-dark-card border-t border-border-color dark:border-dark-border">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-6 sm:px-8 py-16"
            >
                {/* --- CHANGE: Added text-center for mobile and text-left for medium screens and up --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center md:text-left">
                    {/* Column 1: Brand Info */}
                    <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-bold text-dark dark:text-dark-text mb-4">
                            Madhara <span className="text-primary dark:text-dark-primary">Service Center</span>
                        </h3>
                        <p className="text-muted dark:text-dark-muted mb-6 max-w-xs mx-auto md:mx-0">
                            Your Trusted Partner in Professional Staffing Solutions.
                        </p>
                        {/* --- CHANGE: Social links are centered on mobile --- */}
                        <div className="flex space-x-4 justify-center md:justify-start">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} aria-label={social['aria-label']} className="w-10 h-10 flex items-center justify-center bg-light dark:bg-dark-secondary text-muted dark:text-dark-muted hover:bg-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-text rounded-full transition-all duration-300 transform hover:scale-110">
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2 & 3: Links */}
                    {footerSections.map((section) => (
                        <motion.div variants={itemVariants} key={section.title}>
                            <h4 className="text-lg font-semibold text-dark dark:text-dark-text mb-5 tracking-wider uppercase">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-muted dark:text-dark-muted hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Column 4: Contact Info */}
                     <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-dark dark:text-dark-text mb-5 tracking-wider uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            {contactDetails.map((detail, index) => (
                                // --- CHANGE: Contact items are centered on mobile ---
                                <li key={index} className="flex items-start gap-4 justify-center md:justify-start">
                                    <detail.icon className="text-primary dark:text-dark-primary mt-1 flex-shrink-0" size={18} />
                                    <span className="text-muted dark:text-dark-muted">{detail.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Sub-Footer */}
            <div className="bg-light dark:bg-dark-secondary/50 py-6 border-t border-border-color dark:border-dark-border">
                 <div className="container mx-auto px-6 sm:px-8 text-center">
                    <p className="text-sm text-muted dark:text-dark-muted">
                        &copy; {new Date().getFullYear()} Madhara Service Center. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;