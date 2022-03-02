import React from 'react';
import { render } from '@testing-library/react';
import AudioPlayer from '../AudioPlayer';

describe('AudioPlayer', () => {
    it('renders', () => {
        const component = render(<AudioPlayer />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
