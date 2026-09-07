import { cleanup, render, waitFor } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { Deck } from "../Deck";
import userEvent from "@testing-library/user-event";
import { useState } from "react";



const words = [
        {
            word: 'apple',
            translate: 'Яблоко'
        },
        {
            word: 'house',
            translate: 'Дом'
        },
        {
            word: 'water',
            translate: 'Вода'
        },
]


vi.mock('@/atoms/data', () => ({
    words: [
        {
            word: 'apple',
            translate: 'Яблоко'
        },
        {
            word: 'house',
            translate: 'Дом'
        },
        {
            word: 'water',
            translate: 'Вода'
        },
    ]
}))
vi.mock('../lib.ts', () => {
    return {
        shuffle: (words: any[]) => [words[1], words[0], words[2]]
    }
})

const mockOnChange = vi.fn();
const TestWrapp = () => {
    const [word, setWord] = useState(words);
    const changeLib = (words: any[]) => {setWord([...words])}
    return <>
    
        <Deck lib={word} onChangeLib={changeLib}/>
    </>
}

describe('Тестирование Deck', () => {
    beforeEach(() => {
        cleanup();
    })

    it('Рендер', () => {
        const {getByText} = render(<Deck lib={words} onChangeLib={mockOnChange}/>);
        expect(getByText('apple')).toBeInTheDocument();
        
    })
    it('Перелистывание карточек', async () => {
        const {getByText, getByTestId} = render(<Deck lib={words} onChangeLib={mockOnChange}/>);
        expect(getByText('apple')).toBeInTheDocument();
        const nextBtn = getByTestId('nextCard');
        expect(nextBtn).toBeInTheDocument();
        await userEvent.click(nextBtn);
        expect(getByText('house')).toBeInTheDocument();
    })
    it('Показать ответ', async () => {
        const {getByText, getByTestId} = render(<Deck lib={words} onChangeLib={mockOnChange}/>);
        expect(getByText('apple')).toBeInTheDocument();
        const responseBtn = getByTestId('checkResponse');
        await userEvent.click(responseBtn);
        expect(getByText('Яблоко')).toBeInTheDocument();

    })
    it('Перемешать слова', async () => {
        const {getByTestId} = render(<TestWrapp/>);
        const wordWrap = getByTestId('word');
        expect(wordWrap).toBeInTheDocument();
        expect(wordWrap.textContent).toBe('apple');

        const mixBtn = getByTestId('mix');
        await userEvent.click(mixBtn);
        expect(wordWrap.textContent).not.toBe('apple');

    })

})