/**
 * Formats a date string into English format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in English
 * 
 * @example
 * // returns "Monday, January 1, 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 * 
 * // returns "January 1, 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 * 
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = 'full') => {
    const date = new Date(isoString);

    const formats = {
        full: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Jakarta'
        },
        short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Jakarta'
        },
        time: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Jakarta'
        }
    };

    // Use en-GB for Day Month Year format which is common in international contexts, 
    // or en-US for Month Day Year. Let's stick to en-US as it was the base, 
    // but maybe en-GB is better for "24 December 2024".
    // The user asked for "English elements".
    // Let's use 'en-GB' to get "Tuesday, 24 December 2024" which looks nice.

    if (format === 'time') {
        return date.toLocaleTimeString('en-GB', formats[format]);
    }

    return date.toLocaleDateString('en-GB', formats[format]);
};