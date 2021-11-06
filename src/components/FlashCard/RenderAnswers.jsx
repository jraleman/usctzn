import React from 'react';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderAnswers = ({ children }) => (
    <>
        {children?.map((a) => (
            <li key={uniqueId('answer_')}>{a}</li>
        ))}
    </>
);

export default RenderAnswers;
