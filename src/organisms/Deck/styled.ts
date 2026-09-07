import { Flexbox } from "@/atoms/styled";
import {styled} from "styled-components";

export const DeckWrap = styled(Flexbox)`
    position: relative;
    width: fit-content;
    div.empty{
        opacity: 0;
    }
    div.playCard{
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: bottom left;
        box-shadow: 0px 1px 20px #c5c5c5;
    }
    .el2 {transform: rotate(3deg); z-index: 2}
    .el3 {transform: rotate(6deg); z-index: 1}

`
export const DeckMenu = styled(Flexbox)`
    position: fixed;
    align-items: center;
    gap: 40px;
    left: 50%;
    translate: -50%;
    bottom: 30px;
    z-index: 100;
    button{
        box-shadow: 0px 4px 5px #7474746e;
        transition: .4s ease;
        &:hover{
            scale: 0.9;
        }
    }
    .next{
        border-radius: 50%;
        background: #5b4ba3;
        width: 4rem;
        height: 4rem;
        padding: 10px;
    }

`