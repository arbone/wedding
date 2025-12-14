import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Gallery() {
    const { t } = useLanguage();
    const [cards, setCards] = useState([
        { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 1", caption: t('gallery.caption1') },
        { id: 2, src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 2", caption: t('gallery.caption2') },
        { id: 3, src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 3", caption: t('gallery.caption3') },
        { id: 4, src: "https://images.unsplash.com/photo-1522673607200-1645062cd958?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 4", caption: t('gallery.caption4') },
        { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 5", caption: t('gallery.caption5') },
        { id: 6, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800", alt: "Couple Photo 6", caption: t('gallery.caption6') },
    ]);

    const [exitDirection, setExitDirection] = useState(1);

    // Remove the top card and add it back to the bottom
    const cycleCard = (direction = 1) => {
        setExitDirection(direction);
        setCards(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    return (
        <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/50 to-rose-50/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
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
                        {t('gallery.title')}
                    </motion.h2>

                    <div className="flex items-center justify-center gap-6 pt-2 opacity-60">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        <Camera className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                        <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                </motion.div>

                {/* Card Deck */}
                <div className="flex justify-center items-center min-h-[500px] md:min-h-[600px]">
                    <div className="relative w-[300px] h-[420px] md:w-[350px] md:h-[490px]">
                        <AnimatePresence mode="popLayout">
                            {cards.map((card, index) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    index={index}
                                    total={cards.length}
                                    onSwipe={cycleCard}
                                    exitDirection={exitDirection}
                                    galleryTitle={t('gallery.title')}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Swipe Hint */}
                <p className="text-center text-gray-400 text-sm mt-6">
                    {t('gallery.swipeHint')}
                </p>
            </div>
        </section>
    );
}

function Card({ card, index, total, onSwipe, exitDirection, galleryTitle }) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

    // Only the top card (index 0) is interactive
    const isTop = index === 0;

    // Calculate stack offset and rotation for cards below
    const stackOffset = Math.min(index, 4); // Max 4 visible cards in stack
    const baseRotation = index === 0 ? 0 : (index % 2 === 0 ? -2 : 2) * Math.min(index, 3);
    const yOffset = stackOffset * 8;
    const scale = 1 - (stackOffset * 0.04);
    const zIndex = total - index;

    const handleDragEnd = (_, info) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
            onSwipe(1);
        } else if (info.offset.x < -threshold) {
            onSwipe(-1);
        }
    };

    return (
        <motion.div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{
                x: isTop ? x : 0,
                rotate: isTop ? rotate : baseRotation,
                zIndex,
            }}
            initial={{
                scale: 0.9,
                y: 50,
                opacity: 0,
                rotate: 10
            }}
            animate={{
                scale,
                y: yOffset,
                opacity: index < 4 ? 1 : 0,
                rotate: baseRotation,
            }}
            exit={{
                x: exitDirection * 300,
                rotate: exitDirection * 30,
                opacity: 0,
                transition: { duration: 0.3 }
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
            }}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={isTop ? handleDragEnd : undefined}
            onClick={() => isTop && onSwipe(1)}
            whileTap={isTop ? { scale: 0.98 } : {}}
        >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-900/20 border border-white/80">
                {/* Photo */}
                <div className="relative w-full h-full">
                    <img
                        src={card.src}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                            <span className="text-white/70 text-xs uppercase tracking-widest">{galleryTitle}</span>
                        </div>
                        <p className="text-white font-serif text-lg md:text-xl italic leading-relaxed">
                            {card.caption}
                        </p>
                    </div>

                    {/* Card Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <span className="text-gray-700 font-medium text-sm">{card.id}/{total}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
