import React from 'react';
import RenderQuestions from './RenderQuestions';

const FlashCard = ({ question, answers }) => (
    <div>
        <h3>{question}</h3>
        <ol>
            <RenderQuestions>{answers}</RenderQuestions>
        </ol>
    </div>
);

export default FlashCard;
