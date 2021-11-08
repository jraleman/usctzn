import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sections from './containers/Sections';
import Header from './components/Header';
import useThemeMode from './utils/hooks/useThemeMode';
import { darkTheme, lightTheme } from './utils/styles/theme';
import americanGovermentData from './data/american-goverment.json';
import rightsAndResponsabilitiesData from './data/rights-and-responsabilities.json';
import systemOfGovermentData from './data/system-of-goverment.json';
import GlobalStyles from './utils/styles/global';

const App = () => {
    const { theme, setTheme } = useThemeMode();
    const data = [
        americanGovermentData,
        rightsAndResponsabilitiesData,
        systemOfGovermentData,
    ];

    const onThemeChange = (themeMode) => {
        setTheme(themeMode);
        localStorage.setItem('theme', themeMode);
    };

    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Header onThemeChange={onThemeChange} theme={theme} />
            <Sections data={data} />
        </ThemeProvider>
    );
};

export default App;
