import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Which airport should I fly to?",
            answer: "The nearest airport is Tirana International Airport (TIA) - Mother Teresa Airport. It's the main airport in Albania and well connected to major European cities."
        },
        {
            question: "How do I get from the airport to the venue?",
            answer: "We recommend using a taxi, which can be easily booked through the Patoko app (Albanian Uber). It's convenient, safe, and affordable. The journey takes approximately 30-40 minutes depending on traffic and where you reside."
        },
        {
            question: "Where should I stay? Are there hotels nearby?",
            answer: "Fushë-Krujë has several hotels available. Alternatively, you can also check hotels in the northern outskirts of Tirana or near Tirana International Airport. Both options guarantee approximately 30 minutes travel time to the venue. We recommend checking Booking.com for options that suit your needs. Feel free to reach out if you need specific recommendations!"
        },
        {
            question: "Should I rent a car? Is parking available?",
            answer: "While we recommend using taxis (via the Patoko app), renting a car is also a great option if you prefer more flexibility. You can book online where you'll find very affordable rates - we recommend getting full coverage (kasko) insurance. The venue has plenty of reserved parking spaces available for all guests."
        },
        {
            question: "Can I extend my stay and explore Albania?",
            answer: "Absolutely! Albania is a beautiful country with so much to offer. From this location, you can easily reach many cities and attractions, making it perfect to combine the wedding with a vacation. We highly encourage you to explore the Albanian Riviera, historic sites like Berat and Gjirokastër, or the stunning beaches of the south!"
        },
        {
            question: "What is the dress code?",
            answer: "We recommend semi-formal to formal attire. Think cocktail dresses, suits, or elegant evening wear. Albania can be warm in May, so choose breathable fabrics. Ladies, consider the venue terrain if wearing heels!"
        },
        {
            question: "Can I bring a plus one or children?",
            answer: "Please check your invitation for details. Due to venue capacity, we can only accommodate guests formally invited. If you have questions about your invitation, feel free to reach out to us directly."
        },
        {
            question: "What time should I arrive?",
            answer: "The celebration starts at 7:00 PM (19:00). We recommend arriving 15-20 minutes early to find parking, settle in, and get ready for the Albanian wedding party!"
        },
        {
            question: "What about gifts? Do you prefer money?",
            answer: "For us your presence is the greatest gift and our biggest honor and pride! The proper explanation is that in Albania, it is common to give a contribution towards our future of the couple. We know it's a question everybody has, so no taboos! There will be a designated area at the venue."
        },
        {
            question: "Will there be food? What about dietary restrictions?",
            answer: "Yes! A full dinner will be served with a variety of traditional Albanian and international dishes. If you have specific dietary restrictions or allergies, please let us know in advance so we can accommodate you."
        },
        {
            question: "Can I take photos and videos?",
            answer: "Absolutely! We encourage you to capture and share moments from our celebration. Feel free to take photos and videos throughout the evening and share them with #ArbiAndLaura. We'll also have a professional photographer!"
        },
        {
            question: "What is 'Valle'? Will there be dancing?",
            answer: "Valle is traditional Albanian folk dancing - and yes, there will be plenty of it! Don't worry if you've never done it before, it's easy to join in and incredibly fun. Come ready to dance, celebrate, and experience authentic Albanian wedding traditions!"
        },
        {
            question: "What's the weather like in May? What should I bring?",
            answer: "May in Albania is beautiful! Expect temperatures around 20-25°C (68-77°F) during the day. Evenings can be cooler, so bring a light jacket or shawl. Rain is unlikely but possible, so a small umbrella might be handy."
        },
        {
            question: "Do people speak English in Albania?",
            answer: "Yes! Especially in tourist areas and among younger people, English is widely spoken. In Tirana and at the venue, you'll have no problem communicating. Basic phrases in Albanian are appreciated but not necessary!"
        },
        {
            question: "What currency is used? Are there ATMs?",
            answer: "Albania uses the Albanian Lek (ALL). Many places accept Euros, but you'll get better rates with Lek. ATMs are widely available in Tirana and Fushë-Krujë. Credit cards are accepted at most hotels and restaurants."
        },
        {
            question: "Who do I contact in case of emergency or if I get lost?",
            answer: "Save these numbers: Arbi [+355 XX XXX XXXX] and Laura [+355 XX XXX XXXX]. For general emergencies in Albania, dial 112. The venue staff will also be available to help on the day of the wedding."
        },
        {
            question: "[MEME BONUS FAQ] H-FARM mates from Albania's 2023 group vacation: What is Rakia?",
            answer: "E' la grappa albanese vecchio. You know the vibe 🥂"
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="min-h-screen relative overflow-hidden py-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-blue-200" />
                        <HelpCircle className="w-5 h-5 text-blue-400" />
                        <div className="h-[1px] w-12 bg-blue-200" />
                    </motion.div>
                </motion.div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl border border-blue-100/50 shadow-md overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                            >
                                <span className="text-lg font-medium text-gray-800 pr-4">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 italic">
                        Have more questions? Feel free to reach out to us directly!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
