import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import config from '@/config/config';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AddToCalendar() {
    const { t } = useLanguage();

    const event = {
        title: "Arbi & Laura's Wedding Party",
        description: "Join us for our wedding celebration! There will be food, drinks, and lots of Valle dancing!",
        location: `${config.data.location}, ${config.data.address}`,
        startTime: "2026-05-16T19:00:00",
        endTime: "2026-05-17T02:00:00",
    };

    // Detect if user is on Android
    const isAndroid = /android/i.test(navigator.userAgent);

    // Google Calendar URL (works great on Android - opens app directly)
    const getGoogleCalendarUrl = () => {
        const formatForGoogle = (dateStr) => dateStr.replace(/[-:]/g, '');
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatForGoogle(event.startTime)}/${formatForGoogle(event.endTime)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    };

    // ICS file download (works great on iOS/Mac/Windows)
    const handleDownloadIcs = () => {
        const formatDate = (dateStr) => dateStr.replace(/[-:]/g, '');

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Arbi & Laura Wedding//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `UID:${Date.now()}@wedding.arbi.dev`,
            `DTSTAMP:${formatDate(new Date().toISOString().slice(0, 19))}`,
            `DTSTART:${formatDate(event.startTime)}`,
            `DTEND:${formatDate(event.endTime)}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.description}`,
            `LOCATION:${event.location}`,
            `URL:${window.location.href}`,
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'arbi-laura-wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleClick = () => {
        if (isAndroid) {
            // On Android, open Google Calendar (will open app if installed)
            window.open(getGoogleCalendarUrl(), '_blank');
        } else {
            // On iOS/Mac/Windows, download .ics file
            handleDownloadIcs();
        }
    };

    return (
        <div className="flex justify-center mt-8">
            <motion.button
                onClick={handleClick}
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
