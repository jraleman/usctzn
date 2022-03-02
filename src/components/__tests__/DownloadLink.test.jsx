import React from 'react';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import DownloadLink from '../DownloadLink';

describe('DownloadLink', () => {
    it('renders', () => {
        const component = renderWithProviders(<DownloadLink />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
