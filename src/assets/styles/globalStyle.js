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
    box-sizing: inherit; 
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    background-color: #f7ec66;
}
a, button {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}
h1,h2 {
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
