import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import config from '@/config/config';
import AddToCalendar from '@/components/AddToCalendar';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero({ guestName: propGuestName }) {
    const { t, language } = useLanguage();
    const [guestName, setGuestName] = useState(propGuestName || '');

    useEffect(() => {
        if (propGuestName) {
            setGuestName(propGuestName);
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const guestParam = urlParams.get('guest');

        if (guestParam) {
            try {
                const decodedName = safeBase64.decode(guestParam);
                setGuestName(decodedName);
            } catch (error) {
                console.error('Error decoding guest name:', error);
                setGuestName('');
            }
        }
    }, [propGuestName]);

    const CountdownTimer = ({ targetDate }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
        function calculateTimeLeft() {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        }
        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearInterval(timer);
        }, [targetDate]);

        const timeLabels = {
            days: t('hero.days'),
            hours: t('hero.hours'),
            minutes: t('hero.minutes'),
            seconds: t('hero.seconds')
        };

        return (
            <div className="flex justify-center gap-8 sm:gap-12 mt-12">
                {Object.keys(timeLeft).map((interval) => (
                    <motion.div
                        key={interval}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center group"
                    >
                        <span className="text-3xl sm:text-4xl font-serif font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {String(timeLeft[interval]).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mt-2">
                            {timeLabels[interval] || interval}
                        </span>
                    </motion.div>
                ))}
            </div>
        );
    };

    const FloatingParticles = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: typeof window !== 'undefined' ? window.innerHeight : 1000
                        }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0, 1.5, 0],
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: -100
                        }}
                        transition={{
                            duration: Math.random() * 5 + 10,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "linear"
                        }}
                        className="absolute"
                    >
                        <div
                            className="w-1 h-1 rounded-full bg-blue-200 blur-[1px]"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center relative overflow-hidden bg-[#FAFAFA]">
                {/* Elegant Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white" />

                {/* Floating Particles */}
                <FloatingParticles />

                {/* Language Selector - Top Right */}
                <div className="absolute top-6 right-6 z-50">
                    <LanguageSelector />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl mx-auto w-full space-y-10 sm:space-y-16"
                >
                    <div className="space-y-6 sm:space-y-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="space-y-3"
                        >
                            {guestName && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-2xl sm:text-3xl font-serif text-gray-800 italic mb-2"
                                >
                                    {t('hero.greeting')} {guestName}
                                </motion.p>
                            )}
                            <p className="text-blue-500/80 font-sans font-medium tracking-[0.3em] uppercase text-xs">
                                {t('hero.welcome')}
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-serif text-gray-900 tracking-tight leading-none"
                        >
                            {config.data.groomName} <span className="text-blue-400 font-light">&</span> {config.data.brideName}
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="relative max-w-md mx-auto"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex items-center justify-center gap-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <span className="font-sans tracking-widest text-sm uppercase">
                                        {t('hero.date')}
                                    </span>
                                </div>
                                <div className="w-px h-4 bg-gray-300" />
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    <span className="font-sans tracking-widest text-sm uppercase">
                                        {config.data.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <CountdownTimer targetDate={config.data.date} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <AddToCalendar />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}
