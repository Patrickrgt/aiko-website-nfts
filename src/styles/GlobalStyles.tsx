import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: white;
        --main: black;
        --sub: grey;
        --primary: #6E9CD7;
        --secondary: #FFD158;
        --error: red;
        --hex: polygon(
            25% 0%,
            75% 0%,
            100% 25%,
            100% 75%,
            75% 100%,
            25% 100%,
            0% 75%,
            0% 25%
        );
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 9px;
        color: var(--main);
        font-family: video, serif;
        letter-spacing: 1px;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
