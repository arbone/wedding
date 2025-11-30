import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import config from '@/config/config';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RSVP() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        guests: '1',
        dietary: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const text = `Hi Arbi & Laura! 👋%0A%0AI'd love to confirm my attendance!%0A%0A👤 Name: ${formData.name}%0A👥 Guests: ${formData.guests}%0A🍽️ Dietary: ${formData.dietary || 'None'}%0A💌 Message: ${formData.message}`;
        window.open(`https://wa.me/?text=${text}`, '_blank');
    };

    const handleEmail = () => {
        const subject = `Wedding RSVP - ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AGuests: ${formData.guests}%0D%0ADietary Restrictions: ${formData.dietary || 'None'}%0D%0AMessage: ${formData.message}`;
        window.location.href = `mailto:arbi@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="rsvp" className="min-h-screen pt-32 pb-32 px-6 bg-[#FAFAFA] relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-lg mx-auto relative z-10"
            >
                <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 opacity-50" />

                    <div className="text-center space-y-4 mb-10">
                        <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 tracking-tight">{t('rsvp.title')}</h1>
                        <p className="text-gray-500 font-sans tracking-wide text-sm uppercase">{t('rsvp.subtitle')}</p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-blue-500 transition-colors">{t('rsvp.nameLabel')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('rsvp.namePlaceholder')}
                                    className="w-full pb-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-500 outline-none transition-all text-lg text-gray-800 placeholder:text-gray-300"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-blue-500 transition-colors">{t('rsvp.guestsLabel')}</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full pb-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-500 outline-none transition-all text-lg text-gray-800 cursor-pointer"
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? t('rsvp.guest') : t('rsvp.guests')}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-blue-500 transition-colors">{t('rsvp.dietaryLabel')}</label>
                                <textarea
                                    name="dietary"
                                    value={formData.dietary}
                                    onChange={handleChange}
                                    placeholder={t('rsvp.dietaryPlaceholder')}
                                    rows="1"
                                    className="w-full pb-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-500 outline-none transition-all text-lg text-gray-800 placeholder:text-gray-300 resize-none"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-blue-500 transition-colors">{t('rsvp.messageLabel')}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={t('rsvp.messagePlaceholder')}
                                    rows="2"
                                    className="w-full pb-3 bg-transparent border-b-2 border-gray-100 focus:border-blue-500 outline-none transition-all text-lg text-gray-800 placeholder:text-gray-300 resize-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={handleWhatsApp}
                                disabled={!formData.name}
                                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium shadow-lg shadow-green-900/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span className="tracking-wide">{t('rsvp.whatsappBtn')}</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={handleEmail}
                                disabled={!formData.name}
                                className="w-full py-4 bg-white border-2 border-blue-100 hover:border-blue-200 text-blue-600 rounded-xl font-medium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                <span className="tracking-wide">{t('rsvp.emailBtn')}</span>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
