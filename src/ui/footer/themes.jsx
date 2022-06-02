import { createGlobalStyle,  } from "styled-components"

export const Light = {
    body:"red",
    // fontColor:"#000"
}

export const Dark = {
    body: "black",
    // fontColor:"#fff",
}


export const GlobalStyles = createGlobalStyle`
body{
    background-color:${props=>props.theme.body};
}

`