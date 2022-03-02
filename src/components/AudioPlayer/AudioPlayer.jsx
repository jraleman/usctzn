import React from 'react';
import styled from 'styled-components';
import DownloadLink from '../DownloadLink';
import uniqueId from '../../utils/helpers/uniqueId';

// TODO: Use an actual audio player instead of download mp3 file
const AudioPlayer = ({ audioFile }) => {
    const { src, label } = audioFile || {};
    return (
        <Container>
            <DownloadLink key={uniqueId('mp3_')} src={src} label={`🔊 ${label} 🔊`} />
        </Container>
    );
};

const Container = styled.div``;

export default AudioPlayer;
