// app/components/Faq.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

const faqData = [
    {
        question: "What types of care services does Madhara Services provide?",
        answer: "We offer personalized care for the elderly, babies, and those who are sick or recovering. Our services include daily assistance, companionship, hygiene support, feeding, medication reminders, and emotional care — all tailored to meet the specific needs of each individual and family."
    },
    {
        question: "Are your caregivers trained and background-checked?",
        answer: "Yes. Every caregiver at Madhara Services goes through a thorough background check, skill assessment, and professional training before joining our team. We ensure that each team member upholds our values of compassion, responsibility, and trust."
    },
    {
        question: "Can I choose or meet the caregiver before they start?",
        answer: "Absolutely. We understand that comfort and trust are important. Families have the option to meet and approve their assigned caregiver before service begins, ensuring the right match for both personality and care needs."
    },
    {
        question: "What types of contracts do you offer?",
        answer: "We offer flexible staffing solutions, including temporary, permanent, and contract-to-hire options. We tailor our agreements to fit your business needs, whether you require short-term support or a long-term staffing partner."
    },
    {
        question: "Are your services available on a full-time or part-time basis?",
        answer: "Yes, we offer flexible plans — whether you need a caregiver for a few hours, overnight, or full-time support. Our goal is to make care accessible and adaptable to your schedule and needs."
    },
    {
        question: "Can I combine care and security services?",
        answer: "Yes, you can. Many of our clients choose to combine our caregiving and security services for complete peace of mind. Whether it’s having a caregiver and a guard in the same household or arranging a customized schedule, we’ll help design a solution that fits your exact needs and lifestyle."
    }
];

// This is the individual accordion item component.
// It receives its state (isOpen) and the toggle function from the parent.
const AccordionItem = ({
    question,
    answer,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => {
    return (
        <motion.div
            layout // This animates the layout changes smoothly
            className="border-b border-border-color/60 dark:border-dark-border/60 last:border-b-0"
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start text-left gap-4 py-6 px-4 sm:px-6 transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
                <span className="text-base sm:text-lg text-dark dark:text-dark-text font-semibold">
                    {question}
                </span>
                <motion.div
                    className="mt-1 flex-shrink-0"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <FiChevronDown size={22} className={`transition-colors ${isOpen ? 'text-primary dark:text-dark-primary' : ''}`} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: 'auto', y: 0 },
                            collapsed: { opacity: 0, height: 0, y: -10 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 px-4 sm:px-6 text-muted dark:text-dark-muted leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// This is the main FAQ component that manages the state for all items.
const Faq = () => {
    // State to track which accordion item is open. `false` means all are closed.
    // We default it to `0` to have the first question open on page load.
    const [expandedIndex, setExpandedIndex] = useState<number | false>(0);

    return (
        <section id="faq" className="py-20 sm:py-24 bg-light dark:bg-dark-card">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-dark-text">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted dark:text-dark-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                        Quick answers to common questions about our services.
                    </p>
                </motion.div>

                {/* Main container for the FAQ list */}
                <div className="max-w-5xl mx-auto bg-secondary/50 dark:bg-dark-secondary/50 rounded-2xl overflow-hidden shadow-subtle border border-border-color/50 dark:border-dark-border/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={expandedIndex === index}
                                onToggle={() => setExpandedIndex(expandedIndex === index ? false : index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Call to action block */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-16 p-8 bg-secondary dark:bg-dark-secondary rounded-2xl max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-dark dark:text-dark-text">Still have questions?</h3>
                    <p className="mt-2 text-muted dark:text-dark-muted">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Link href="#contact" className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-subtle hover:shadow-lifted">
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Faq;