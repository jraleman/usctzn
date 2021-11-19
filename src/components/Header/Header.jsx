import React from 'react';
import styled from 'styled-components';
import DarkMode from '../DarkMode';
import logoSrc from '../../assets/logo.png';

const Header = ({
    theme = '',
    isModalOpen = false,
    onThemeChange = () => {},
    onModalOpen = () => {},
}) => {
    const modalIcon = isModalOpen ? '❌' : '❓';
    return (
        <HeaderContainer>
            <ContentWrapper>
                <Info onClick={onModalOpen}>{modalIcon}</Info>
                <Logo src={logoSrc} alt="USCTZN" />
                <Mode>
                    <DarkMode
                        theme={theme}
                        onThemeChange={onThemeChange}
                    />
                </Mode>
            </ContentWrapper>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.color.header.background};
    color:  ${({ theme }) => theme.color.header.text};
    padding: 1em;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    height: 48px;
    filter: invert();
`;

const Info = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const Mode = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export default Header;
