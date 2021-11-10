import React from 'react';
import { render } from '@testing-library/react';
import DarkMode from '../DarkMode';

describe('DarkMode', () => {
    it('renders', async () => {
        const onThemeChange = jest.fn();
        const theme = '';
        const component = render(
            <DarkMode onThemeChange={onThemeChange} theme={theme} />
        );
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });

    it('changes theme mode', async () => {
        const onThemeChange = jest.fn();
        const theme = 'light';
        const component = render(
            <DarkMode onThemeChange={onThemeChange} theme={theme} />
        );
        // fireevent click div
        // get from query
        // expect onClick
        expect(component).not.toBeNull();
    });
});
