import { motion } from 'framer-motion';
import { MapPin, Utensils, Music, PartyPopper, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Timeline() {
    const { t } = useLanguage();

    const timelineItems = [
        {
            time: "19:00",
            title: t('location.arrival'),
            icon: MapPin,
            gradient: "from-blue-500 to-cyan-400",
            bgGradient: "from-blue-50 to-cyan-50",
            glowColor: "blue"
        },
        {
            time: "20:00",
            title: t('location.dinner'),
            icon: Utensils,
            gradient: "from-amber-500 to-orange-400",
            bgGradient: "from-amber-50 to-orange-50",
            glowColor: "amber"
        },
        {
            time: "21:30",
            title: t('location.party'),
            icon: Music,
            gradient: "from-purple-500 to-pink-400",
            bgGradient: "from-purple-50 to-pink-50",
            glowColor: "purple"
        },
        {
            time: "00:00",
            title: t('location.cake'),
            icon: PartyPopper,
            gradient: "from-rose-500 to-pink-400",
            bgGradient: "from-rose-50 to-pink-50",
            glowColor: "rose"
        },
        {
            time: "∞",
            title: t('location.afterParty'),
            icon: Sparkles,
            gradient: "from-indigo-500 to-violet-400",
            bgGradient: "from-indigo-50 to-violet-50",
            glowColor: "indigo",
            isSpecial: true
        }
    ];

    return (
        <div className="space-y-4">
            {timelineItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group cursor-pointer"
                >
                    <div className={`relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${item.bgGradient} border border-white/50 hover:border-white hover:shadow-lg transition-all duration-300`}>
                        {/* Time Badge */}
                        <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                            {/* Glow effect on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />

                            <span className={`relative text-white font-bold ${item.isSpecial ? 'text-2xl' : 'text-lg'} tracking-tight`}>
                                {item.time}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-grow flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 bg-gradient-to-br ${item.gradient} bg-clip-text`} style={{ color: `var(--tw-gradient-from)` }} />
                                <span className="text-gray-800 font-medium text-lg group-hover:text-gray-900 transition-colors">
                                    {item.title}
                                </span>
                            </div>

                            {/* Arrow indicator */}
                            <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <span className="text-gray-400">→</span>
                            </motion.div>
                        </div>

                        {/* Special badge for last item */}
                        {item.isSpecial && (
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2"
                            >
                                <span className="text-xl">🎉</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
