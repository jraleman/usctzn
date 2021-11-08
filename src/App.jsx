import React from 'react';
import Sections from './containers/Sections';
import Header from './components/Header';
import americanGovermentData from './data/american-goverment.json';
import rightsAndResponsabilitiesData from './data/rights-and-responsabilities.json';
import systemOfGovermentData from './data/system-of-goverment.json';

const App = () => {
    const data = [
        americanGovermentData,
        rightsAndResponsabilitiesData,
        systemOfGovermentData,
    ];
    return (
        <div>
            <Header />
            <Sections data={data} />
        </div>
    );
};

export default App;
