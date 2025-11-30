import Hero from './Hero';
import Gallery from './Gallery';
import Location from './Location';
import FAQ from './FAQ';
import RSVP from './RSVP';

// Main Invitation Content
const MainContent = () => {
    return (
        <main className="flex-grow">
            <Hero />
            <Gallery />
            <Location />
            <RSVP />
            <FAQ />
        </main>
    );
};

export default MainContent;