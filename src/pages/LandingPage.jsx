// src/pages/LandingPage.jsx
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion } from 'framer-motion';
import { Calendar, Clock, MailOpen } from 'lucide-react';

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
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(30, 58, 138, 0.15)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenInvitation}
          className="group relative px-8 py-4 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl shadow-blue-900/10 border border-white/60 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

          <span className="relative z-10 flex items-center gap-4">
            <span className="font-serif text-lg tracking-wide text-blue-950 group-hover:text-blue-800 transition-colors">
              Open Invitation
            </span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 transition-colors"
            >
              <MailOpen className="w-5 h-5 text-blue-600" />
            </motion.div>
          </span>
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

export default LandingPage;

