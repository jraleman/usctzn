import React from 'react';
import RenderAnswers from './RenderAnswers';

const FlashCard = ({ question, answers }) => (
    <div>
        <h3>{question}</h3>
        <ol>
            <RenderAnswers>{answers}</RenderAnswers>
        </ol>
    </div>
);

export default FlashCard;
