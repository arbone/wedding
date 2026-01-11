import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RSVP() {
    const { t } = useLanguage();

    const whatsappNumber = "393246987461";
    const whatsappMessage = encodeURIComponent(t('rsvp.whatsappMessage'));
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="rsvp" className="py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-lg mx-auto relative z-10 space-y-8">
                {/* Section Header - Outside Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight">
                        {t('rsvp.title')}
                    </h2>
                    <div className="flex items-center justify-center gap-6 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <Heart className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 via-pink-200 to-blue-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-blue-900/5 border border-white/60">
                        {/* Content */}
                        <div className="text-center space-y-6">
                            {/* Note */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {t('rsvp.note')}
                            </p>

                            {/* Deadline Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-rose-50 rounded-full border border-blue-100/50"
                            >
                                <Calendar className="w-5 h-5 text-blue-500" />
                                <span className="font-serif text-xl text-gray-800 font-medium">
                                    {t('rsvp.deadline')}
                                </span>
                            </motion.div>

                            {/* Instruction */}
                            <p className="text-gray-500 text-base">
                                {t('rsvp.instruction')}
                            </p>
                        </div>

                        {/* WhatsApp Button */}
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full mt-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-medium shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 transition-colors"
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span className="text-lg tracking-wide">{t('rsvp.whatsappBtn')}</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
