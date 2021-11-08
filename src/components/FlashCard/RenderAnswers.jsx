import React from 'react';
import styled from 'styled-components';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderAnswers = ({ children }) => (
    <>
        {children?.map((answer) => (
            <ListItem key={uniqueId('answer_')}>{answer}</ListItem>
        ))}
    </>
);

const ListItem = styled.li`
    text-align: left;
`;

export default RenderAnswers;
