import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Sections from './containers/Sections';
import StudyGuide from './containers/StudyGuide';
import Header from './components/Header';
import ModalInfo from './components/ModalInfo/ModalInfo';
import GlobalStyles from './utils/styles/global';
import useThemeMode from './utils/hooks/useThemeMode';
import { darkTheme, lightTheme } from './utils/styles/theme';
import americanGovermentData from './data/american-goverment.json';
import rightsAndResponsabilitiesData from './data/rights-and-responsabilities.json';
import systemOfGovermentData from './data/system-of-goverment.json';
import symbolsAndHolidaysData from './data/symbols-and-holidays.json';
import eightHundredsHistoryData from './data/1800s-history.json';
import colonialPeriodAndIndependenceData from './data/colonial-period-and-independence.json';
import recentAmericanHistoryData from './data/recent-american-history.json';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme, setTheme } = useThemeMode();
    const data = [
        americanGovermentData,
        rightsAndResponsabilitiesData,
        systemOfGovermentData,
        symbolsAndHolidaysData,
        eightHundredsHistoryData,
        colonialPeriodAndIndependenceData,
        recentAmericanHistoryData,
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
            <StudyGuide />
            <hr />
            <Sections data={data} />
        </ThemeProvider>
    );
};

export default App;
