import styled from "styled-components";

export const DropDownWrapper = styled.div<{$type: 'circle' | 'default'}>`
    ${props => props.$type === 'circle' && `
        button.drop__btn{
            position: absolute;
            right: 0;
            top: 0;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            z-index: 2;   
        }
        div.drop__content{
            
            max-width: 300px;
            background: white;
            border-radius: 10px;
            padding: 1rem 4rem 1rem 1rem;
            width: 0;
            height: 0;
            overflow: hidden;
            opacity: 0;
            &.active{
                transition: 1s ease;
                width: 250px;
                height: auto;
                opacity: 1;
            }
        }
    `}
    ${props => props.$type === 'default' && `
        button.drop__btn{
            display: flex;
            align-items: center;
            span{
                font-size: 1rem;
                margin-right: 1rem;
            }
            font-size: 1rem;
        }
    `}


`