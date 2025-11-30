import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion';
import { formatEventDate } from "@/lib/formatEventDate";
import { useLanguage } from '@/contexts/LanguageContext';
import Timeline from '@/components/Timeline';

export default function Location() {
    const { t } = useLanguage();

    return (<>
        {/* Location section */}
        <section id="location" className="min-h-screen relative overflow-hidden bg-[#FAFAFA] py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-6 mb-20"
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

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                    {/* Map Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 overflow-hidden border border-gray-100 h-full flex flex-col group"
                    >
                        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                            <iframe
                                src={config.data.maps_embed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                            ></iframe>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300 pointer-events-none" />
                        </div>

                        <div className="p-8 sm:p-10 space-y-8 flex-grow flex flex-col justify-center bg-white relative">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif text-gray-900">{t('location.ceremony')}</h3>
                                <div className="flex items-start gap-4 text-gray-600">
                                    <div className="p-2 bg-blue-50 rounded-full">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <p className="leading-relaxed text-lg font-light">
                                        {t('location.address')}
                                    </p>
                                </div>
                            </div>

                            <motion.a
                                href={config.data.maps_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-white border-2 border-blue-100 hover:border-blue-200 text-blue-600 rounded-xl font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-3 transition-all group/btn"
                            >
                                <NavigationIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                                {t('location.getDirections')}
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Schedule Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-gray-100 p-8 sm:p-10 h-full relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="p-3 bg-blue-50 rounded-2xl">
                                <Clock className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-serif text-gray-900">{t('location.schedule')}</h3>
                        </div>

                        <div className="relative z-10">
                            <Timeline />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>)
}