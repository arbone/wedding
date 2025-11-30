import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import config from '@/config/config';

export default function AddToCalendar() {
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
        <div className="flex gap-3 justify-center mt-6">
            <motion.a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors"
            >
                <CalendarPlus className="w-4 h-4" />
                Google Calendar
            </motion.a>

            <motion.button
                onClick={handleDownloadIcs}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
                <CalendarPlus className="w-4 h-4" />
                iCal / Outlook
            </motion.button>
        </div>
    );
}
