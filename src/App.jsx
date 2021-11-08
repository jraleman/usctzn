import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Sections from './containers/Sections';
import Header from './components/Header';
import ModalInfo from './components/ModalInfo/ModalInfo';
import GlobalStyles from './utils/styles/global';
import useThemeMode from './utils/hooks/useThemeMode';
import { darkTheme, lightTheme } from './utils/styles/theme';
import americanGovermentData from './data/american-goverment.json';
import rightsAndResponsabilitiesData from './data/rights-and-responsabilities.json';
import systemOfGovermentData from './data/system-of-goverment.json';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const onModalOpen = () => {
        setIsModalOpen((t) => !t);
    };

    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Header
                theme={theme}
                isModalOpen={isModalOpen}
                onThemeChange={onThemeChange}
                onModalOpen={onModalOpen}
            />
            <ModalInfo isModalOpen={isModalOpen} />
            <Sections data={data} />
        </ThemeProvider>
    );
};

export default App;
