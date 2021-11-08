import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders', async () => {
        const component = render(<App  />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
