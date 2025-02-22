import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 p-3 rounded-full transition-all duration-300
        dark:bg-white/10 dark:hover:bg-white/20
        bg-theme-blue-200 hover:bg-theme-blue-300
        backdrop-blur-sm border
        dark:border-white/20 border-theme-blue-300
        group shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 dark:text-gold text-theme-blue-600 group-hover:scale-110 transition-transform" />
      ) : (
        <Moon className="w-6 h-6 dark:text-gold text-theme-blue-600 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
}

export default ThemeToggle