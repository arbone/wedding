import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' },
        { code: 'sq', label: 'Shqip', flag: '🇦🇱' }
    ];

    const currentLang = languages.find(l => l.code === language);

    return (
        <div className="relative z-50">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm hover:bg-white/40 transition-colors"
            >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-sm font-medium text-gray-700 uppercase">{currentLang.code}</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-white/50 overflow-hidden min-w-[140px] z-50"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50
                                        ${language === lang.code ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700'}
                                    `}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    {lang.label}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
