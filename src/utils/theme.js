import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

export const lightTheme = {
    color: {
        background: '#f1f1f1',
        text: '#121620'
    }
};

export const darkTheme = {
    color: {
        background: '#121620',
        text: '#f1f1f1'
    }
};
