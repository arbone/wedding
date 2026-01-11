import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    // Check if URL contains /hfarm or ?hfarm to show the bonus FAQ
    const isHfarmMode = window.location.pathname.includes('hfarm') ||
        window.location.search.includes('hfarm') ||
        window.location.hash.includes('hfarm');

    const baseFaqs = [
        { question: t('faq.q1'), answer: t('faq.a1') },
        { question: t('faq.q2'), answer: t('faq.a2') },
        { question: t('faq.q3'), answer: t('faq.a3') },
        { question: t('faq.q4'), answer: t('faq.a4') },
        { question: t('faq.q5'), answer: t('faq.a5') },
        { question: t('faq.q6'), answer: t('faq.a6') },
        { question: t('faq.q7'), answer: t('faq.a7') },
        { question: t('faq.q8'), answer: t('faq.a8') },
        { question: t('faq.q9'), answer: t('faq.a9') },
        { question: t('faq.q10'), answer: t('faq.a10') },
        { question: t('faq.q11'), answer: t('faq.a11') },
        { question: t('faq.q12'), answer: t('faq.a12') },
        { question: t('faq.q13'), answer: t('faq.a13') },
        { question: t('faq.q14'), answer: t('faq.a14') },
        { question: t('faq.q15'), answer: t('faq.a15') },
        { question: t('faq.q16'), answer: t('faq.a16') },
    ];

    // Add bonus H-FARM FAQ only if in hfarm mode
    const faqs = isHfarmMode
        ? [...baseFaqs, { question: t('faq.q17'), answer: t('faq.a17') }]
        : baseFaqs;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Consistent Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight"
                    >
                        {t('faq.title')}
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <HelpCircle className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(index * 0.05, 0.3) }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg shadow-blue-900/5 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                                >
                                    <span className="text-lg font-medium text-gray-800 pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                                    >
                                        <ChevronDown className="w-5 h-5 text-blue-500" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 italic">
                        {t('faq.contact')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
