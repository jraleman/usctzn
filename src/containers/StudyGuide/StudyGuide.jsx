import React from 'react';
import styled from 'styled-components';
import PdfDownloader from '../../components/PdfDownloader/PdfDownloader';
import AudioPlayer from '../../components/AudioPlayer';

const StudyGuide = () => {
    const label = 'StudyGuide';
    return (
        <div>
            <h2>{label}</h2>
            <AudioPlayer />
            <PdfDownloader />
        </div>
    );
};

export default StudyGuide;
