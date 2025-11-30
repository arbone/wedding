import { motion } from 'framer-motion';
import { Heart, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import config from '@/config/config';
import WeatherBanner from '@/components/WeatherBanner';
import AddToCalendar from '@/components/AddToCalendar';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero() {
    const [guestName, setGuestName] = useState('');

    useEffect(() => {
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
    }, []);

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

        return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {Object.keys(timeLeft).map((interval) => (
                    <motion.div
                        key={interval}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100"
                    >
                        <span className="text-xl sm:text-2xl font-bold text-blue-600">
                            {timeLeft[interval]}
                        </span>
                        <span className="text-xs text-gray-500 capitalize">{interval}</span>
                    </motion.div>
                ))}
            </div>
        );
    };

    const FloatingParticles = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: typeof window !== 'undefined' ? window.innerHeight : 1000
                        }}
                        animate={{
                            opacity: [0, 0.6, 0.6, 0],
                            scale: [0, 1, 1, 0],
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: -100
                        }}
                        transition={{
                            duration: Math.random() * 3 + 5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut"
                        }}
                        className="absolute"
                    >
                        <div
                            className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-400' :
                                i % 3 === 1 ? 'bg-yellow-300' :
                                    'bg-blue-300'
                                } blur-[1px]`}
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center relative overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 via-transparent to-yellow-50/30"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Floating Particles */}
                <FloatingParticles />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 relative z-10"
                >

                    <div className="space-y-4">
                        {/* Weather Banner */}
                        <div className="flex justify-center mb-10">
                            <WeatherBanner />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 font-light italic text-base sm:text-lg"
                        >
                            We're excited to have you join us on our special day!
                        </motion.p>
                        <motion.h2
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-4xl sm:text-6xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
                        >
                            {config.data.groomName} & {config.data.brideName}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-gray-400 font-serif italic text-sm sm:text-base max-w-md mx-auto"
                        >
                            "Two souls with but a single thought, two hearts that beat as one"
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="relative max-w-md mx-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white/70 backdrop-blur-xl rounded-2xl shadow-2xl" />

                        <div className="relative px-4 sm:px-8 py-8 sm:py-10 rounded-2xl border border-blue-200/30 shadow-lg">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                            </div>

                            <div className="space-y-6 text-center">
                                <div className="space-y-3">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Calendar className="w-4 h-4 text-blue-400" />
                                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                                            {formatEventDate(config.data.date, "full")}
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="flex items-center justify-center space-x-2"
                                    >
                                        <Clock className="w-4 h-4 text-blue-400" />
                                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                                            {config.data.time}
                                        </span>
                                    </motion.div>
                                </div>

                                <div className="flex items-center justify-center gap-3">
                                    <div className="h-px w-8 sm:w-12 bg-blue-200/50" />
                                    <div className="w-2 h-2 rounded-full bg-blue-200" />
                                    <div className="h-px w-8 sm:w-12 bg-blue-200/50" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-px">
                                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                            </div>
                        </div>

                        <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100/20 rounded-full blur-xl" />
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
