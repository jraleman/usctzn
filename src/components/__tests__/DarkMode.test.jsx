import React from 'react';
import { render } from '@testing-library/react';
import DarkMode from '../DarkMode';

describe('DarkMode', () => {
    it('renders', async () => {
        const component = render(<DarkMode  />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
