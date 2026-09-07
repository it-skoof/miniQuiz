import { createGlobalStyle } from "styled-components";

const theme = createGlobalStyle`
    html{
        font-size: 16px;
    }
    body, html{
        padding: 0;
        margin: 0;
        height: 100%;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Google Sans", sans-serif;
        &::selection{
            background: #424383;
            color: white;
        }
    }
    body{
        background: #e5e4f7;
        min-height: 100%;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
    


`
export default theme;