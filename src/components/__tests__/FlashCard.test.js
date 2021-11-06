import React from 'react';
import { render, screen } from '@testing-library/react';
import FlashCard from '../FlashCard';
import americanGovermentData from '../../data/american-goverment.json';

describe('FlashCard', () => {
    it('renders', async () => {
        const question = '';
        const answers = [''];
        const component = render(<FlashCard question={question} answers={answers} />);
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });

    it('shows some answers', async () => {
        const { content } = americanGovermentData;
        const question = Object.keys(content[0])
        const answers = Object.values(content[0])
        const component = render(<FlashCard question={question} answers={answers} />);
        const title = screen.getByText(question)?.textContent;
        expect(title).toEqual(question[0]);
        expect(answers[0]).toEqual(
            expect.arrayContaining([expect.any(String)])
        );
        expect(component).not.toBeNull();
        expect(component).toMatchSnapshot();
    });
});
