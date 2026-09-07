import { Flexbox } from "@/atoms/styled";
import styled from "styled-components";

export const CardWrap = styled(Flexbox)`

    position: relative;
    width: 500px;
    background: white;
    border-radius: 20px;
    height: 700px;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    justify-content: space-between;
    transition: .6s ease;
    &.active{
        transform: rotate(0deg) !important;
        z-index: 3 !important;
    }
    .loader{
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
    h1{
        font-size: 4rem;
        color: rgb(66, 67, 131);
    }
    .card__header{
        align-items: center; 
        gap: 10px;
    }
    .card__prompt{
        position: relative;
        padding-top: 2rem;
        font-weight: 400;
        font-size: 1.2rem;
        &:hover{
            color: black;
        }
        &::before{
            position: absolute;
            display: inline-block;
            height: 1px;
            width: 50%;
            background: #dddddd;
            content: ' ';
            top: 0;
            left: 50%;
            translate: -50%;
        }
    }
    
    .card__prompt, .card__header{
        color: #808080;
    }
    .card__favButton{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 2rem;
        height: 2rem;
        color: #cecece;
        &.isFav{
            color: #e2cf23;
        }
    }
    &.active{
        box-shadow: 0px 30px 40px -10px #7f6fda98;
    }
`