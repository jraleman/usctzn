import React from 'react';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderQuestions = ({ children }) => (
    <>
        {children[0]?.map((a) => (
            <li key={uniqueId('answer_')}>{a}</li>
        ))}
    </>
);

export default RenderQuestions;
