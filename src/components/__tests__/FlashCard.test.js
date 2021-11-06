import React from 'react';
import { render, screen } from '@testing-library/react';
import FlashCard from '../FlashCard';

describe('FlashCard', () => {
    it('renders', async () => {
        const question = '';
        const answers = [''];
        const component = render(<FlashCard question={question} answers={answers} />);
        expect(component.container).not.toBeNull();
        expect(component).toMatchSnapshot();
    });

    it('shows some answers', async () => {
        const question = 'What is the meaning of life?';
        const answers = ['42'];
        const component = render(<FlashCard question={question} answers={answers} />);
        const title = screen.getByText(question)?.textContent;
        expect(title).toEqual(question);
        expect(answers).toEqual(
            expect.arrayContaining([expect.any(String)])
        );
        expect(component.container).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
