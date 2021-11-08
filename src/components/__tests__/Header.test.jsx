import React from 'react';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import Header from '../Header';

describe('Header', () => {
    it('renders', async () => {
        const component = renderWithProviders(<Header  />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
