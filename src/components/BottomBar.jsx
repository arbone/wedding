import React, { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  MapPin,
  MessageCircleHeart,
  HelpCircle,
  Camera
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from "@/lib/utils";

export default function BottomBar() {
  const { t } = useLanguage();
  const [active, setActive] = useState('home');

  const menuItems = [
    { icon: Home, label: t('nav.home'), href: '#home', id: 'home' },
    { icon: Camera, label: t('nav.gallery'), href: '#gallery', id: 'gallery' },
    { icon: MapPin, label: t('nav.location'), href: '#location', id: 'location' },
    { icon: MessageCircleHeart, label: t('nav.rsvp'), href: '#rsvp', id: 'rsvp' },
    { icon: HelpCircle, label: t('nav.faq'), href: '#faq', id: 'faq' },
  ];

  // Function to handle smooth scrolling when clicking menu items
  const handleMenuClick = useCallback((e, href, id) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Temporarily set active state for immediate feedback
      setActive(id);

      // Smooth scroll to element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Set up Intersection Observer for automatic section detection
  useEffect(() => {
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '-20% 0px -80% 0px', // Trigger when section is 20% visible from top
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          // Only update if it's a valid menu section
          const validSection = menuItems.find(item => item.id === sectionId);
          if (validSection) {
            setActive(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that correspond to menu items
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [menuItems]);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        className="w-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-3 py-2">
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center py-2 px-2 rounded-xl transition-all duration-300 ease-in-out",
                  "hover:bg-gray-50/80 cursor-pointer min-w-[60px]",
                  active === item.id
                    ? "text-primary bg-primary/5"
                    : "text-gray-600"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleMenuClick(e, item.href, item.id)}
              >
                <motion.div
                  animate={{
                    scale: active === item.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon
                    className={cn(
                      "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-all duration-300",
                      active === item.id
                        ? "stroke-blue-500 stroke-[2.5px]"
                        : "stroke-gray-600 stroke-2"
                    )}
                  />
                </motion.div>
                <motion.span
                  className={cn(
                    "text-[10px] sm:text-xs font-medium transition-all duration-300 line-clamp-1",
                    active === item.id
                      ? "text-blue-500 font-semibold"
                      : "text-gray-600"
                  )}
                  animate={{
                    scale: active === item.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
    </div>
  );
}