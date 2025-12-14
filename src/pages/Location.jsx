import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin } from 'lucide-react'
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Timeline from '@/components/Timeline';

export default function Location() {
    const { t } = useLanguage();

    return (<>
        {/* Location section */}
        <section id="location" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
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
                        {t('location.title')}
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <MapPin className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Location Card Only */}
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-rose-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-white/60">
                            {/* Map Container */}
                            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                                <iframe
                                    src={config.data.maps_embed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                                ></iframe>

                                {/* Gradient Overlay - covers bottom controls */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" style={{ background: 'linear-gradient(to top, white 0%, white 15%, transparent 50%)' }} />
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6">
                                {/* Venue Name */}
                                <div className="space-y-2">
                                    <h3 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">
                                        Vathi Kompleks
                                    </h3>
                                    <div className="flex items-start gap-3 text-gray-500">
                                        <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-base leading-relaxed">
                                            {t('location.address')}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                                {/* Get Directions Button */}
                                <motion.a
                                    href={config.data.maps_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-2xl font-medium shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all duration-300"
                                >
                                    <NavigationIcon className="w-5 h-5" />
                                    <span className="text-lg">{t('location.getDirections')}</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Schedule Section - Separate */}
        <section id="schedule" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
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
                        {t('location.schedule')}
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <Clock className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Timeline Card */}
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                        <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white/60 p-6 sm:p-8">
                            <Timeline />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>)
}