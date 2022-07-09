import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    *::-webkit-scrollbar {
        width: 5px;
    }
    *::-webkit-scrollbar-thumb {
        background: #afb0f8;
        opacity:40%;
        border-radius: 2px;
    }
    *::-webkit-scrollbar-track {
        background: transparent;
    }
`