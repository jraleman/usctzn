import React from 'react';
import { render } from '@testing-library/react';
import StudyGuide from '../StudyGuide';

describe('StudyGuide', () => {
    it('renders', () => {
        const component = render(<StudyGuide />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
