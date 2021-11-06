import React from 'react';
import { render } from '@testing-library/react';
import Sections from '../Sections';
import americanGovermentData from '../../data/american-goverment.json';
import systemOfGovermentData from '../../data/system-of-goverment.json';

describe('Sections', () => {
    it('renders', async () => {
        const container = render(<Sections />);
        expect(container).toMatchSnapshot();
        expect(container).not.toBeNull();
    });

    it('shows some sections', async () => {
        const data = [
            americanGovermentData,
            systemOfGovermentData
        ];
        const component = render(<Sections data={data} />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
