import React from 'react';
import styled from 'styled-components';
import uniqueId from '../../utils/helpers/uniqueId';
import DownloadLink from '../DownloadLink';

const PdfDownloader = ({ pdfs }) => {
    return (
        <Container>
            {pdfs?.map(({ src, label }) => (
                <DownloadLink
                    key={uniqueId('pdf_')}
                    src={src}
                    label={`⏬ ${label} ⏬`}
                />
            ))}
        </Container>
    );
};

const Container = styled.div``;

export default PdfDownloader;
