import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import config from '@/config/config';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AddToCalendar() {
    const { t } = useLanguage();

    const event = {
        title: "Arbi & Laura's Wedding Party",
        description: "Join us for our wedding celebration! There will be food, drinks, and lots of Valle dancing!",
        location: config.data.location.address,
        startTime: "2026-05-16T19:00:00",
        endTime: "2026-05-17T02:00:00",
    };

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime.replace(/[-:]/g, '')}/${event.endTime.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    const handleDownloadIcs = () => {
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${document.location.href}
DTSTART:${event.startTime.replace(/[-:]/g, '')}
DTEND:${event.endTime.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'arbi-laura-wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex justify-center mt-8">
            <motion.button
                onClick={handleDownloadIcs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-md rounded-full text-blue-600 font-medium shadow-lg shadow-blue-900/5 border border-blue-100 hover:bg-blue-50 transition-all group"
            >
                <CalendarPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">{t('hero.addToCalendar')}</span>
            </motion.button>
        </div>
    );
}
