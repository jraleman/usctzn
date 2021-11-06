import React from 'react';
import { render } from '@testing-library/react';
import Sections from '../Sections';

describe('Sections', () => {
    it('renders', async () => {
        const container = render(<Sections />);
        expect(container).toMatchSnapshot();
        expect(container).not.toBeNull();
    });
});
