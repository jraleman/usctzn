import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <ContentWrapper>
                <Info>Info</Info>
                <Logo>USCTZN</Logo>
                <Mode>Dark mode</Mode>
            </ContentWrapper>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    background-color: black;
    color: white;
    padding: 1em;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div``;

const Info = styled.div``;

const Mode = styled.div``;

export default Header;
