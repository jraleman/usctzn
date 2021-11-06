import React from 'react';
import Sections from './containers/Sections';
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
            <Sections data={data} />

        </div>
    );
};

export default App;
