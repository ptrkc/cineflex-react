import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    font-family: ${(props) => props.theme.fontFamily};
    margin: 67px 0px 20px;
    background-color: ${(props) => props.theme.bgColor};
    transition: .5s;
}
`;

export default GlobalStyle;
