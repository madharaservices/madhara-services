// app/components/RequestForm.tsx
"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';

const RequestForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("This is a demo form. Submission functionality is not yet configured.");
    };

    return (
        <section id="contact" className="py-20 sm:py-24 bg-secondary dark:bg-dark-secondary">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">Request a Service</h2>
                    <p className="text-muted dark:text-dark-muted text-base sm:text-lg mt-4">Fill out the form below and our team will get back to you promptly.</p>
                </motion.div>
                
                {/* --- CHANGE: Added Glassmorphism effect classes --- */}
                <div className="max-w-4xl mx-auto bg-light/60 dark:bg-dark-card/60 backdrop-blur-xl rounded-2xl shadow-lifted border border-black/10 dark:border-white/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                         {/* --- CHANGE: Removed background color from this div for the glass effect to be visible --- */}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-dark dark:text-dark-text mb-6">Contact Information</h3>
                            <p className="text-muted dark:text-dark-muted mb-8">Feel free to reach out to us directly through any of these channels.</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <FiMail className="text-primary dark:text-dark-primary" size={20}/>
                                    <span className="text-dark dark:text-dark-text">contact@madhara.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FiPhone className="text-primary dark:text-dark-primary" size={20}/>
                                    <span className="text-dark dark:text-dark-text">+94 76 577 8129</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FiMapPin className="text-primary dark:text-dark-primary" size={20}/>
                                    <span className="text-dark dark:text-dark-text">123 Main Street, Colombo</span>
                                </div>
                            </div>
                        </div>

                        <motion.form
                            ref={form}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            onSubmit={handleSubmit}
                            className="p-8"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="companyName" className="hidden">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" placeholder="Company Name" required className="w-full px-4 py-3 bg-secondary/70 dark:bg-dark-secondary/70 border-b-2 border-border-color dark:border-dark-border rounded-t-lg text-dark dark:text-dark-text focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-dark-primary transition-colors placeholder:text-muted dark:placeholder:text-dark-muted" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Contact Email" required className="w-full px-4 py-3 bg-secondary/70 dark:bg-dark-secondary/70 border-b-2 border-border-color dark:border-dark-border rounded-t-lg text-dark dark:text-dark-text focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-dark-primary transition-colors placeholder:text-muted dark:placeholder:text-dark-muted" />
                                </div>
                                <div>
                                    <label htmlFor="service" className="hidden">Service</label>
                                    <select id="service" name="service" required className="w-full px-4 py-3 bg-secondary/70 dark:bg-dark-secondary/70 border-b-2 border-border-color dark:border-dark-border rounded-t-lg text-dark dark:text-dark-text focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-dark-primary transition-colors">
                                        <option value="">Select a service</option>
                                        <option value="Elderly Care">Elderly Care</option>
                                        <option value="Baby Care">Baby Care</option>
                                        <option value="Domestic Help">Domestic Help</option>
                                        <option value="Security Services">Security Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea id="message" name="message" rows={4} placeholder="Details / Message" required className="w-full px-4 py-3 bg-secondary/70 dark:bg-dark-secondary/70 border-b-2 border-border-color dark:border-dark-border rounded-t-lg text-dark dark:text-dark-text focus:outline-none focus:ring-0 focus:border-primary dark:focus:border-dark-primary transition-colors placeholder:text-muted dark:placeholder:text-dark-muted"></textarea>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="group bg-primary dark:bg-dark-primary text-white inline-flex items-center gap-3 px-8 py-3 rounded-full text-lg font-bold hover:bg-primary-dark dark:hover:bg-blue-700 transition-all duration-300 transform hover:shadow-lifted hover:scale-105">
                                        Submit 
                                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default RequestForm;