import React from 'react';
import { render } from '@testing-library/react';
import PdfDownloader from '../PdfDownloader';

describe('PdfDownloader', () => {
    it('renders', () => {
        const component = render(<PdfDownloader />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
