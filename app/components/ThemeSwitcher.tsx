// app/components/ThemeSwitcher.tsx
"use client";
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full p-2 flex items-center justify-center bg-secondary dark:bg-dark-secondary text-dark dark:text-dark-text hover:bg-border-color dark:hover:bg-dark-border transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitcher;