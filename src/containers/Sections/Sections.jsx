import React from 'react';
import styled from 'styled-components';
import RenderSection from './RenderSection';
import uniqueId from '../../utils/helpers/uniqueId';

const Sections = ({ data = [] }) => {
    const title = "Questions and Answers";
    return (
        <SectionsContainer>
            <Title>{title}</Title>
            {data.map(({ title, content }) => (
                <RenderSection
                    key={uniqueId('section_')}
                    title={title}
                    content={content}
                />
            ))}
        </SectionsContainer>
    );
};

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.text};
`;

const SectionsContainer = styled.div`
    background-color: ${({ theme }) => theme.color.background};
`;

export default Sections;
