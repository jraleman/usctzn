import React from 'react';
import styled from 'styled-components';
import PdfDownloader from '../../components/PdfDownloader';
import AudioPlayer from '../../components/AudioPlayer';

const studyGuide2020Pdf = '/assets/Study_Guide_-_Civic_Test_2020.pdf'
const questionsAnswersPdf = '/assets/128_Civics_Questions_and_Answers_(2020_version).pdf'

const StudyGuide = () => {
    const title = 'Study Guide';
    const pdfs = [
        {
            label: 'Study Guide 2020',
            src: studyGuide2020Pdf,
        },
        {
            label: '128 Civics Q&A',
            src: questionsAnswersPdf,
        }
    ];
    return (
        <StudyGuideContainer>
            <Title>{title}</Title>
            <AudioPlayer />
            <PdfDownloader pdfs={pdfs} />
        </StudyGuideContainer>
    );
};

const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
`;

const StudyGuideContainer = styled.div``;

export default StudyGuide;
