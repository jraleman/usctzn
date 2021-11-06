import { render } from '@testing-library/react';
import React from 'react';
import FlashCard from '../FlashCard';

describe('FlashCard', () => {
    it('renders', async () => {
        const question = '';
        const answers = [''];
        const component = render(<FlashCard question={question} answers={answers} />);
        expect(component.container).not.toBeNull();
    });
});
