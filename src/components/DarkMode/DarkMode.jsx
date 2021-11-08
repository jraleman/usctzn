import React from 'react';
import styled from 'styled-components';

const DarkMode = ({ onThemeChange, theme }) => {
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        onThemeChange(isDarkTheme ? 'light' : 'dark');
    };

    return (
        <StyledButton onClick={toggleTheme}>
            <span aria-label="dark mode" role="img">
                {isDarkTheme ? '🌞' : '🌜'}
            </span>
        </StyledButton>
    );
};

const StyledButton = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export default DarkMode;
