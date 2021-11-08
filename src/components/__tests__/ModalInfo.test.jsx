import React from 'react';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import ModalInfo from '../ModalInfo';

describe('ModalInfo', () => {
    it('renders', async () => {
        const component = renderWithProviders(<ModalInfo  />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
