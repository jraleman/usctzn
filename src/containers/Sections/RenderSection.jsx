import React from 'react';
import styled from 'styled-components';
import FlashCard from '../../components/FlashCard';
import uniqueId from '../../utils/helpers/uniqueId';

const RenderSection = ({ title = '', content = [] }) => (
    <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {content.map((c) => (
            <FlashCard
                key={uniqueId('flash-card_')}
                question={Object.keys(c)}
                answers={Object.values(c)[0]}
            />
        ))}
        <SectionDivider />
    </SectionContainer>
);

const SectionTitle = styled.h3`
    text-align: center;
    text-transform: uppercase;
`;

const SectionContainer = styled.div`
    padding: 2em;
`;

const SectionDivider = styled.hr``;

export default RenderSection;
