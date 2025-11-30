import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function Gallery() {
    // Placeholder images - User should replace these with real photos
    const photos = [
        { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 1", caption: "Our First Date" },
        { id: 2, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 2", caption: "The Proposal" },
        { id: 3, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 3", caption: "Adventures Together" },
        { id: 4, src: "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 4", caption: "Engagement Party" },
        { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 5", caption: "Pre-wedding Shoot" },
        { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 6", caption: "Counting Down" },
    ];

    return (
        <section id="gallery" className="min-h-screen py-20 px-4 bg-blue-50/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Our Story
                    </motion.h2>

                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="h-[1px] w-12 bg-blue-200" />
                        <Camera className="w-5 h-5 text-blue-400" />
                        <div className="h-[1px] w-12 bg-blue-200" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white font-medium text-lg">{photo.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
