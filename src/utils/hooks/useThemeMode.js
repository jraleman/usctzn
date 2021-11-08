import { useEffect, useState } from 'react';

const useThemeMode = () => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
          setTheme(savedTheme);
        } else if (prefersDark) {
          setTheme('dark');
        }
    }, []);

    return ({ theme, setTheme });
};

export default useThemeMode;
