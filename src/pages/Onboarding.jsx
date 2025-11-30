import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Onboarding({ onComplete }) {
    const { setLanguage } = useLanguage();
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setStep(2);
        }
    };

    const handleLanguageSelect = (lang) => {
        setLanguage(lang);
        onComplete(name);
    };

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' },
        { code: 'sq', label: 'Shqip', flag: '🇦🇱' },
        { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'ur', label: 'اردو', flag: '🇵🇰' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-hidden bg-[#FAFAFA] flex items-center justify-center px-4"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

            <div className="relative z-10 w-full max-w-md">
                <AnimatePresence mode='wait'>
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-white p-8 sm:p-12 text-center"
                        >
                            <form onSubmit={handleNameSubmit} className="space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 italic">Welcome</h2>
                                    <p className="text-gray-500 font-light tracking-wide">It's a pleasure to have you with us...</p>
                                </div>

                                <div className="space-y-8">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name"
                                        className="w-full bg-transparent border-b-2 border-gray-200 focus:border-blue-400 outline-none py-2 text-center text-2xl font-serif text-gray-800 placeholder:text-gray-300 transition-colors"
                                        autoFocus
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={!name.trim()}
                                        className="w-full py-4 bg-gray-900 text-white rounded-full font-medium tracking-wide shadow-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        Continue
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-white p-8 sm:p-12 text-center"
                        >
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <h2 className="text-2xl font-serif text-gray-900 italic">Select Language</h2>
                                    <p className="text-gray-500 font-light">Please choose your preferred language</p>
                                </div>

                                <div className="grid gap-3">
                                    {languages.map((lang) => (
                                        <motion.button
                                            key={lang.code}
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 246, 255, 0.8)" }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleLanguageSelect(lang.code)}
                                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white/50 hover:border-blue-200 transition-all group"
                                        >
                                            <span className="text-2xl">{lang.flag}</span>
                                            <span className="font-serif text-lg text-gray-700 group-hover:text-blue-800 italic">{lang.label}</span>
                                            <ArrowRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
