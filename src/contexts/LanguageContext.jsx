import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '@/config/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage or browser settings, default to 'en'
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('wedding-lang');
        if (savedLang && ['en', 'it', 'sq', 'fa', 'ru', 'ur'].includes(savedLang)) {
            return savedLang;
        }
        // Simple browser language detection
        const browserLang = navigator.language.split('-')[0];
        return ['it', 'sq', 'fa', 'ru', 'ur'].includes(browserLang) ? browserLang : 'en';
    });

    useEffect(() => {
        localStorage.setItem('wedding-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            current = current[key];
        }

        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
