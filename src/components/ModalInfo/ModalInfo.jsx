import React from 'react';
import styled from 'styled-components';

const ModalInfo = ({ isModalOpen }) => {
    if (!isModalOpen) {
        return null;
    }
    return (
        <ModalWrapper>
            <ModalContainer>
                <Title>About</Title>
                <InfoContent>
                    <strong>👨‍💻 Author: </strong> Jose Ramon Aleman
                    <br />
                    <strong>📝 Description: </strong> Get prepared for the citizenship interview :D
                </InfoContent>
            </ModalContainer>
        </ModalWrapper>
    );
};

const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    background:black;
    background:rgba(0,0,0,0.8);
`;

const ModalContainer = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.color.modal.text};
    border: ${({ theme }) => theme.color.modal.border} solid 1px;
    background-color: ${({ theme }) => theme.color.modal.background};
    margin: 0 auto;
    max-width: 500px;
`;

const Title = styled.h2``;

const InfoContent = styled.p`
    padding: 1em;
`;

export default ModalInfo;
