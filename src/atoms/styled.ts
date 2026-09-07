import {styled} from 'styled-components'
import { ButtonProps } from './types'
export const Flexbox = styled.div`
    display: flex;
`
export const IconButton = styled.button<Omit<ButtonProps, '$variant'>>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.$pd || '0'} ;
    color: ${props => props.color || 'black'};
    background: ${props => props.$bg || 'none'};
    svg{
        width: 80%;
        height: 80%;
    }

`
export const Loader = styled.div`
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    width: 5rem;
    height: 5rem;
    border: 7px solid #e8e5ff;
    border-top-color: #6c5ce7;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
`

export const Button = styled.button.attrs<ButtonProps>((props) => ({
    $variant: props.$variant || 'filled'
}))`
    border-radius: 10px;
    padding: ${props => props.$pd || '1rem 2rem'} ;
    font-weight: 500;
    ${props => props.$variant === 'filled' && `
        background: ${props.$bg || 'white'};    
        color: ${props.color || 'black'};
    `}
    ${props => props.$variant === 'outlined' && `
        background: none;
        border: 1px solid ${props.color || 'black'};
        color: ${props.color || 'black'};
    `}
    ${props => props.$variant === 'rounded' && `
        background: ${props.$bg || 'white'};
        color: ${props.color || 'black'};
        border-radius: 30px;
    `}

`