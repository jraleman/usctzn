import React from 'react';
import FlashCard from './components/FlashCard';

const App = () => {
    const data = [
        {
            'What is the meaning of life?': [ '42' ]
        }
    ];
    return (
        <div>
            {data.map((d) => (
                <FlashCard question={Object.keys(d)} answers={Object.values(d)} />
            ))}
        </div>
    );
};

export default App;
