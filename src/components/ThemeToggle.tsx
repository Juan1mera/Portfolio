import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="w-6 h-6 text-purple" />
            ) : (
                <Sun className="w-6 h-6 text-text-color" />
            )}
        </button>
    );
};

export default ThemeToggle;
