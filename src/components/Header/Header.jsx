import React from 'react';
import styled from 'styled-components';
import DarkMode from '../DarkMode';

const Header = ({ onThemeChange, theme }) => {
    return (
        <HeaderContainer>
            <ContentWrapper>
                <Info>{'❓'}</Info>
                <Logo>USCTZN</Logo>
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

const Logo = styled.span``;

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
