import { motion } from 'framer-motion';
import { Clock, MapPin, CalendarCheck, ExternalLink, Music, Utensils, PartyPopper, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Timeline() {
    const { t } = useLanguage();

    const timelineItems = [
        {
            time: "19:00",
            title: t('location.arrival'),
            icon: MapPin,
            color: "bg-blue-500",
            lightColor: "bg-blue-100"
        },
        {
            time: "20:00",
            title: t('location.dinner'),
            icon: Utensils,
            color: "bg-indigo-500",
            lightColor: "bg-indigo-100"
        },
        {
            time: "21:30",
            title: t('location.party'),
            icon: Music,
            color: "bg-purple-500",
            lightColor: "bg-purple-100"
        },
        {
            time: "00:00",
            title: t('location.cake'),
            icon: PartyPopper,
            color: "bg-pink-500",
            lightColor: "bg-pink-100"
        },
        {
            time: "ALL NIGHT LONG - 'TILL THE SUN GOES UP!",
            title: t('location.afterParty'),
            icon: Sparkles,
            color: "bg-indigo-500",
            lightColor: "bg-indigo-100"
        }
    ];

    return (
        <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100" />

            {timelineItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6 group"
                >
                    {/* Icon Bubble */}
                    <div className={`relative z-10 w-14 h-14 flex-shrink-0 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`w-full h-full rounded-full ${item.lightColor} flex items-center justify-center`}>
                            <item.icon className={`w-6 h-6 ${item.color.replace('bg-', 'text-')}`} />
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-grow p-5 rounded-2xl bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-white/50 hover:border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className={`flex flex-col ${item.time.length > 10 ? '' : 'sm:flex-row sm:items-center'} justify-between gap-1`}>
                            <span className={`font-bold font-mono ${item.time.length > 10 ? 'text-sm sm:text-base' : 'text-xl'} ${item.color.replace('bg-', 'text-')}`}>
                                {item.time}
                            </span>
                            <span className="text-gray-800 font-medium text-lg">
                                {item.title}
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
