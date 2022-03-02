import React from 'react';
import styled from 'styled-components';

const DownloadLink = ({ src = '', label = '' }) => {
    return (
        <Link href={src} download>
            ⏬ {label} ⏬
        </Link>
    );
};

const Link = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    color: red;
    font-family: 'Helvetica', sans-serif;
    padding: 12px;
`;

export default DownloadLink;
