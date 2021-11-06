import React from 'react';
import FlashCard from './components/FlashCard';
import americanGovermentData from './data/american-goverment.json';
import uniqueId from './utils/helpers/uniqueId';

const App = () => {
    const data = [
        americanGovermentData,
    ];
    return (
        <div>
            {data.map(({ title, content }) => (
                <div key={uniqueId('section_')}>
                    <h2>{title}</h2>
                    {content.map((d) => (
                        <FlashCard
                            key={uniqueId('flash-card_')}
                            question={Object.keys(d)}
                            answers={Object.values(d)[0]}
                        />
                    ))}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default App;
