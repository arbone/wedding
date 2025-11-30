import Hero from './Hero';
import Gallery from './Gallery';
import Location from './Location';
import FAQ from './FAQ';
import RSVP from './RSVP';

// Main Invitation Content
const MainContent = ({ guestName }) => {
    return (
        <main className="flex-grow">
            <Hero guestName={guestName} />
            <Gallery />
            <Location />
            <RSVP />
            <FAQ />
        </main>
    );
};

export default MainContent;