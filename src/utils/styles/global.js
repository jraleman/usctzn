import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${({ theme }) => theme.color.app.background} !important;
        color: ${({ theme }) => theme.color.app.text} !important;
    }
    body {
        transition: background 0.2s ease-in, color 0.2s ease-in;
    }
`;

export default GlobalStyles;
