import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import config from '@/config/config';

export default function RSVP() {
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
        <section id="rsvp" className="min-h-screen pt-24 pb-32 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md mx-auto space-y-8"
            >
                <div className="text-center space-y-2">
                    <h1 className="font-serif text-4xl text-gray-800">RSVP</h1>
                    <p className="text-gray-500 italic">Please let us know if you can make it!</p>
                </div>

                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-blue-100 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Number of Guests</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Dietary Restrictions</label>
                            <textarea
                                name="dietary"
                                value={formData.dietary}
                                onChange={handleChange}
                                placeholder="Any allergies or special diets?"
                                rows="2"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Leave a note for the couple..."
                                rows="3"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleWhatsApp}
                            disabled={!formData.name}
                            className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-medium shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Confirm via WhatsApp
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleEmail}
                            disabled={!formData.name}
                            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send className="w-4 h-4" />
                            Confirm via Email
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
