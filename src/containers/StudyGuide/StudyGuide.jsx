import React from 'react';
import styled from 'styled-components';
import PdfDownloader from '../../components/PdfDownloader';
import AudioPlayer from '../../components/AudioPlayer';

// const studyGuide2020Pdf = '../../assets/Study_Guide_-_Civic_Test_2020.pdf';
// const questionsAnswersPdf = '../../assets/128_Civics_Questions_and_Answers_(2020_version).pdf';
// const audioFileSrc = '../../assets/128_2020_Civics_Test_Version_English.mp3';

const studyGuide2020Pdf = '/usctzn/assets/Study_Guide_-_Civic_Test_2020.pdf';
const questionsAnswersPdf = '/usctzn/assets/128_Civics_Questions_and_Answers_(2020_version).pdf';
const audioFileSrc = '/usctzn/assets/128_2020_Civics_Test_Version_English.mp3';

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
    const audioFile = {
        label: 'Civics Q&A Audio File',
        src: audioFileSrc,
    }
    return (
        <StudyGuideContainer>
            <Title>{title}</Title>
            <AudioPlayer audioFile={audioFile} />
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
