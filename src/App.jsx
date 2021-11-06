import React from 'react';
import FlashCard from './components/FlashCard';
import americanGovermentData from './data/american-goverment.json';

const App = () => {
    // const data = [
    //     americanGovermentData.content,
    // ];
    return (
        <div>
            <h2>{americanGovermentData.title}</h2>
            {americanGovermentData.content.map((d) => (
                <FlashCard question={Object.keys(d)} answers={Object.values(d)} />
            ))}
        </div>
    );
};

export default App;
