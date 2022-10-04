import { createGlobalStyle } from "styled-components";
export const lightTheme = {
    body : 'white',
    fontColor : "black"
}
export const darkTheme = {
    body : '#272727',
    fontColor : "white"
}
export const GlobalStyles = createGlobalStyle `
    body {
        background-color : ${props => props.theme.body};
        color : ${props => props.theme.fontColor};
    }
    
`