import { cleanup, render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FavList } from "../FavList";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { useAppStore } from "@/atoms/store";


const words = {
    favWords: ['apple'],
    deleteFromFav: (word: string) => {
        words.favWords = [];
    }
}

vi.mock('@/atoms/store', () => {
    
    return {
        useAppStore: vi.fn()
    }
})
describe('Тестирование FavList', () => {
    beforeEach(() => {
        cleanup();
    })
    

    it('Рендер', () => {
        vi.mocked(useAppStore).mockImplementation((state) => {
            return words;
        });
        const {getByTestId} = render(<FavList/>);
        expect(getByTestId('fav')).toBeInTheDocument();        
    })
    it('Открытие/Закрытие', async () => {
        const {getByTestId} = render(<FavList/>);
        expect(getByTestId('fav')).toBeInTheDocument();
        const favBtn = getByTestId('favBtn');
        expect(favBtn).toBeInTheDocument();
        await userEvent.click(favBtn);
        expect(favBtn.nextElementSibling?.classList.contains('active')).toBeTruthy();
        await userEvent.click(favBtn);
        expect(favBtn.nextElementSibling?.classList.contains('active')).toBeFalsy();
    })
    it('Удаление слова', async () => {
        const {getByTestId, queryByTestId, rerender} = render(<FavList/>);
        expect(getByTestId('fav')).toBeInTheDocument();
        const favBtn = getByTestId('favBtn');
        expect(favBtn).toBeInTheDocument();
        await userEvent.click(favBtn);
        expect(favBtn.nextElementSibling?.classList.contains('active')).toBeTruthy();
        expect(favBtn.nextElementSibling?.textContent).toBe('apple')
        const favWord = favBtn.nextElementSibling?.children[0];
        const deleteBtn = favWord?.querySelector('button');
        await userEvent.click(deleteBtn!)
        rerender(<FavList/>)
        expect(queryByTestId('fav')).toBeNull();
       
        
    })
})