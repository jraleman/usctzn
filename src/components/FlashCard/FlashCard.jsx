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
    color: ${({ theme }) => theme.color.card.text};
    border: ${({ theme }) => theme.color.card.boder}; solid;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${({ isFlipped }) => isFlipped && 'transform: rotateY(180deg);'}
    &:hover {
        cursor: pointer;
    }
`;

const FrontCard = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.color.card.background};
    box-shadow: 5px 10px 18px ${({ theme }) => theme.color.card.shadow};
`;

const BackCard = styled(FrontCard)`
    transform: rotateY(180deg);
    overflow: scroll;
`;

const CardTitle = styled.h4`
    text-align: center;
    color: ${({ theme }) => theme.color.card.text};
    font-family: 'Helvetica', sans-serif;
    width: 100%;
`;

const OrderedList = styled.ol`
    width: 100%;
    line-height: 1.5em;
`;

export default FlashCard;
