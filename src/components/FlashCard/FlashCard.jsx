import React, { useState } from 'react';
import styled from 'styled-components';
import RenderAnswers from './RenderAnswers';

const FlashCard = ({ question, answers }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleOnClick = () => {
        setIsFlipped((t) => !t);
    }
    return (
        <CardContainer onClick={handleOnClick}>
            <CardInner isFlipped={isFlipped}>
                <FrontCard>
                    <CardTitle>{question}</CardTitle>
                </FrontCard>
                <BackCard>
                    <OrderedList>
                        <RenderAnswers>{answers}</RenderAnswers>
                    </OrderedList>
                </BackCard>
            </CardInner>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    padding: 1em;
    max-width: 768px;
    margin: 0 auto;
    margin-bottom: 1em;
    perspective: 1000px;
    height: 300px;
`;

const CardInner = styled.div`
    background-color: #f9f9f9;
    border: #666666 solid;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${({ isFlipped }) => isFlipped && 'transform: rotateY(180deg)'}
`;

const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

const BackCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateY(180deg);
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
