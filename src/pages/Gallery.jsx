import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Gallery() {
    const { t } = useLanguage();

    // Placeholder images - User should replace these with real photos
    const photos = [
        { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 1", caption: t('gallery.caption1') },
        { id: 2, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 2", caption: t('gallery.caption2') },
        { id: 3, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 3", caption: t('gallery.caption3') },
        { id: 4, src: "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 4", caption: t('gallery.caption4') },
        { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 5", caption: t('gallery.caption5') },
        { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 6", caption: t('gallery.caption6') },
    ];

    return (
        <section id="gallery" className="min-h-screen py-24 px-4 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

            <div className="container mx-auto max-w-6xl relative z-10">
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
                        {t('gallery.title')}
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <Camera className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group relative aspect-[3/4] cursor-none"
                        >
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/5">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Elegant Caption Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="absolute inset-0 bg-white/90 backdrop-blur-md -z-10" />
                                    <p className="text-gray-900 font-serif text-lg italic text-center">
                                        {photo.caption}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
