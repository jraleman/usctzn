import React from 'react';
import styled from 'styled-components';
import RenderAnswers from './RenderAnswers';

const FlashCard = ({ question, answers }) => (
    <CardContainer>
        <CardTitle>{question}</CardTitle>
        <OrderedList>
            <RenderAnswers>{answers}</RenderAnswers>
        </OrderedList>
    </CardContainer>
);

const CardContainer = styled.div`
    background-color: #f9f9f9;
    padding: 1em;
    border: #666666 solid;
    max-width: 768px;
    margin: 0 auto;
    margin-bottom: 1em;
`;

const CardTitle = styled.h4`
    text-align: center;
    color: #222222;
    font-family: 'Helvetica', sans-serif;
`;

const OrderedList = styled.ol`
    line-height: 1.5em;
`;

export default FlashCard;
