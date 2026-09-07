import { cleanup, getAllByRole, render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { DropDown } from "../DropDown";
import { act, useState } from "react";
import userEvent from "@testing-library/user-event";




const TestWrap = () => {
    const [isOpen, setOpen] = useState(false);
    return <DropDown label="test" isOpen={isOpen} openHandler={() => {setOpen(!isOpen)}} $type="default" data-testid="drop">
        <div data-testid="content">content</div>
    </DropDown>
}

describe('Тестирование DropDown', () => {
    beforeEach(() => {
        cleanup();
    })
    it('Рендер', () => {
        const {getByTestId} = render(<TestWrap/>);
        expect(getByTestId('drop')).toBeInTheDocument();

    })
    it('Открытие', async () => {
        const user = userEvent.setup();
        const {getByTestId, getByRole} = render(<TestWrap/>);
        expect(getByTestId('drop')).toBeInTheDocument();
        const button = getByRole('button');
        await user.click(button)
        
        expect(getByTestId('content')).toBeInTheDocument();
        
    })  


})