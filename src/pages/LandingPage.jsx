// src/pages/LandingPage.jsx
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const LandingPage = ({ onOpenInvitation }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden bg-[url('/images/invitation-card-v2.svg')] bg-cover bg-center bg-no-repeat"
  >
    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-end px-4 pb-[25vh]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        {/* Open Invitation Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenInvitation}
          className="group relative w-[70%] sm:w-auto min-w-[200px] bg-gradient-to-r from-[#6C85B5] via-[#8DA4D0] to-[#6C85B5] text-white px-8 py-4 rounded-full font-serif text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide font-medium">
            <span>Open Invitation</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

export default LandingPage;

