import React from 'react';
import renderWithProviders from '../../utils/helpers/renderWithProviders';
import StudyGuide from '../StudyGuide';

describe('StudyGuide', () => {
    it('renders', () => {
        const component = renderWithProviders(<StudyGuide />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
