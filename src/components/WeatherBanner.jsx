import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WeatherBanner() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Coordinates for Fushë-Krujë, Albania
                const lat = 41.4763;
                const lon = 19.7295;

                // Open-Meteo API - completely FREE, no API key needed!
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe/Tirane`
                );

                if (response.ok) {
                    const data = await response.json();
                    setWeather(data);
                }
            } catch (error) {
                console.error('Error fetching weather:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    const getWeatherIcon = (weatherCode) => {
        // Open-Meteo weather codes
        if (weatherCode === 0) return <Sun className="w-5 h-5 text-yellow-500" />;
        if (weatherCode <= 3) return <Cloud className="w-5 h-5 text-gray-400" />;
        if (weatherCode >= 51 && weatherCode <= 67) return <CloudRain className="w-5 h-5 text-blue-400" />;
        return <Cloud className="w-5 h-5 text-gray-400" />;
    };

    const getWeatherDescription = (weatherCode) => {
        if (weatherCode === 0) return 'Clear sky';
        if (weatherCode === 1) return 'Mainly clear';
        if (weatherCode === 2) return 'Partly cloudy';
        if (weatherCode === 3) return 'Overcast';
        if (weatherCode >= 51 && weatherCode <= 67) return 'Rainy';
        return 'Cloudy';
    };

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-blue-200/50 shadow-sm"
            >
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-gray-600">Loading weather...</span>
            </motion.div>
        );
    }

    if (!weather) {
        return null;
    }

    const current = weather.current;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full border border-blue-200/50 shadow-lg"
        >
            {/* Weather Icon */}
            <div className="flex items-center gap-2">
                {getWeatherIcon(current?.weather_code)}
                <span className="text-lg font-semibold text-gray-800">
                    {Math.round(current?.temperature_2m)}°C
                </span>
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-blue-200" />

            {/* Weather Description */}
            <span className="text-sm text-gray-600">
                {getWeatherDescription(current?.weather_code)}
            </span>

            {/* Additional Info */}
            <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>{current?.relative_humidity_2m}%</span>
                </div>
                <div className="flex items-center gap-1">
                    <Wind className="w-3.5 h-3.5" />
                    <span>{Math.round(current?.wind_speed_10m)} km/h</span>
                </div>
            </div>

            {/* Location */}
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-400 ml-1">
                <span>📍 Fushë-Krujë</span>
            </div>
        </motion.div>
    );
}
