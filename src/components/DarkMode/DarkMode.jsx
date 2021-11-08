import React from 'react';

const DarkMode = ({ onThemeChange, theme }) => {
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        onThemeChange(isDarkTheme ? 'light' : 'dark');
    };

    return (
        <div>
            <button onClick={toggleTheme}>
            <span aria-label="dark mode" role="img">
                {isDarkTheme ? '🌞' : '🌜'}
            </span>
            </button>
        </div>
    );
};

export default DarkMode;
