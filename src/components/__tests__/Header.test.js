import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('renders', async () => {
        const component = render(<Header  />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});