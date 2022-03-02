import React from 'react';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import AudioPlayer from '../AudioPlayer';

describe('AudioPlayer', () => {
    it('renders', () => {
        const component = renderWithProviders(<AudioPlayer />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
