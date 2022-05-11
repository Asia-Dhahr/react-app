import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body} ;
    color: ${({ theme }) => theme.text} ;
    transition: all .6s linear;
}
.btn-primary{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 1rem 1rem;
    border-radius:non;
    font-size:22px;
    transition: all .6s linear;


}
`

export const darkMode = {
    body: '#fff',
    text: '#12121',
    primary: '#888775'
}

export const lightMode = {
    body: '#121212',
    text: '#fff',
    primary: '#888775'
}

