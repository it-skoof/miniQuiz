import { Card } from '..'
import { afterAll, afterEach, beforeAll, describe, expect, it, test, vi} from 'vitest'
import { act, cleanup, getAllByTestId, getByTestId, render, waitFor } from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import { useState } from 'react';


const Wrapper = () => {
    const [flip, setFlip] = useState(false);
    return <Card type='play' flip={flip} onFlip={() => {setFlip(!flip)}} word='BANANA' translate='БАНАН'/>
}

describe('Тестирование Card', () => {
    it('Рендер карточки', () => {
        const {getByText, getByTestId} = render(<Card className='active' type='play' word='BANANA' translate='БАНАН'/>)
        expect(getByText('BANANA')).toBeInTheDocument();
        expect(getByTestId('fav')).toBeInTheDocument();
        expect(getByText('Нажмите чтобы показать ответ')).toBeInTheDocument();
        cleanup();
    })
    it('Переворачивание карточки', async ()=> {
        const {getByText} = render(<Wrapper/>)
        
        expect(getByText('BANANA')).toBeInTheDocument();
        const traslateButton = getByText('Нажмите чтобы показать ответ')
        expect(traslateButton).toBeInTheDocument();
        
        await userEvent.click(traslateButton);
        expect(getByText('БАНАН')).toBeInTheDocument();
        cleanup();
    })
})