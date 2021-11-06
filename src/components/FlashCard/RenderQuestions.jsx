import React from 'react';

const RenderQuestions = ({ children }) => (
    <>
        {children?.map((a, idx) => (
            <li key={idx}>{a}</li>
        ))}
    </>
);

export default RenderQuestions;
