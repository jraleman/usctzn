import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';

const renderWithProviders = (Component) => {
    render(
        <ThemeProvider theme={lightTheme}>
            {Component}
        </ThemeProvider>
    )
};

export default renderWithProviders;
