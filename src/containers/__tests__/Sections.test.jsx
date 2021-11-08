import React from 'react';
import Sections from '../Sections';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import americanGovermentData from '../../data/american-goverment.json';
import systemOfGovermentData from '../../data/system-of-goverment.json';

describe('Sections', () => {
    it('renders', async () => {
        const container = renderWithProviders(<Sections />);
        expect(container).toMatchSnapshot();
        expect(container).not.toBeNull();
    });

    it('shows some sections', async () => {
        const data = [
            americanGovermentData,
            systemOfGovermentData
        ];
        const component = renderWithProviders(<Sections data={data} />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
