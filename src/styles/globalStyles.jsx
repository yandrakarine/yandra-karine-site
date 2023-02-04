import { createGlobalStyle } from "styled-components";
// criando um estulo global: removendo default margin and paddings dos navegadores
export default createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html * {
        font-family: sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #3c0bee;
    }
    p{
        font-weight: 300;
    }
`;
