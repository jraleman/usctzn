import React from 'react';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderAnswers = ({ children }) => (
    <>
        {children[0]?.map((a) => (
            <li key={uniqueId('answer_')}>{a}</li>
        ))}
    </>
);

export default RenderAnswers;
