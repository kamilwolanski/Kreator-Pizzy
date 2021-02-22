import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

html {
    box-sizing: border-box;
}

li {
    list-style: none;
}

*, *::after, *::before {
    box-sizing: inherit;  //dziedziczy od html
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
}
a, button {
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
