import React, { useState } from 'react';
import Sections from './containers/Sections';
import Header from './components/Header';
import americanGovermentData from './data/american-goverment.json';
import rightsAndResponsabilitiesData from './data/rights-and-responsabilities.json';
import systemOfGovermentData from './data/system-of-goverment.json';

const App = () => {
    const [theme, setTheme] = useState('dark');
    const data = [
        americanGovermentData,
        rightsAndResponsabilitiesData,
        systemOfGovermentData,
    ];

    const onThemeChange = (t) => {
        console.log({ t });
        setTheme(t);
    };

    return (
        <div>
            <Header onThemeChange={onThemeChange} theme={theme} />
            <Sections data={data} />
        </div>
    );
};

export default App;
