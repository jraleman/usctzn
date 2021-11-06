import React from 'react';
import FlashCard from '../../components/FlashCard';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderSection = ({ title = '', content = [] }) => (
    <div>
        <h3>{title}</h3>
        {content.map((d) => (
            <FlashCard
                key={uniqueId('flash-card_')}
                question={Object.keys(d)}
                answers={Object.values(d)[0]}
            />
        ))}
        <hr />
    </div>
);

export default RenderSection;
