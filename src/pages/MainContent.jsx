import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import Hero from './Hero';
import Gallery from './Gallery';
import Location from './Location';
import FAQ from './FAQ';
import RSVP from './RSVP';

// Main Invitation Content
const MainContent = ({ guestName }) => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Hide confetti after 5 seconds
        const timer = setTimeout(() => setShowConfetti(false), 5000);

        // Handle window resize
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="flex-grow">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.1}
                    colors={['#3B82F6', '#F472B6', '#FBBF24', '#34D399', '#A78BFA']}
                />
            )}
            <Hero guestName={guestName} />
            <Gallery />
            <Location />
            <RSVP />
            <FAQ />
        </main>
    );
};

export default MainContent;