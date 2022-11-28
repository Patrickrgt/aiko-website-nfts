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
        /* userpanel */
        /* notched vars are brutally bad--will look into other alternatives */
        --notched: polygon(
            0% 10px,/* top left */ 
            10px 0%,/* top left */
            calc(100% - 10px) 0%,/* top right */ 
            100% 10px,/* top right */ 
            100% calc(100% - 10px),/* bottom right */ 
            calc(100% - 10px) 100%,/* bottom right */ 
            10px 100%,/* bottom left */ 
            0 calc(100% - 10px) /* bottom left */
        );
        --notched-xsm: polygon(
            0% 4px,/* top left */ 
            4px 0%,/* top left */
            calc(100% - 4px) 0%,/* top right */ 
            100% 4px,/* top right */ 
            100% calc(100% - 4px),/* bottom right */ 
            calc(100% - 4px) 100%,/* bottom right */ 
            4px 100%,/* bottom left */ 
            0 calc(100% - 4px) /* bottom left */
        );
        --notched-sm: polygon(
            0% 8px,/* top left */ 
            8px 0%,/* top left */
            calc(100% - 8px) 0%,/* top right */ 
            100% 8px,/* top right */ 
            100% calc(100% - 8px),/* bottom right */ 
            calc(100% - 8px) 100%,/* bottom right */ 
            8px 100%,/* bottom left */ 
            0 calc(100% - 8px) /* bottom left */
        );
        --notched-tp: polygon(
            0% 10px,/* top left */ 
            10px 0%,/* top left */ 
            calc(100% - 10px) 0%,/* top right */ 
            100% 10px,/* top right */ 
            100% calc(100% - 0px),/* bottom right */ 
            calc(100% - 0px) 100%,/* bottom right */ 
            0px 100%,/* bottom left */ 
            0 calc(100% - 0px) /* bottom left */
        );
        --notched-md-tp: polygon(
            0% 20px,/* top left */ 
            20px 0%,/* top left */ 
            calc(100% - 20px) 0%,/* top right */ 
            100% 20px,/* top right */ 
            100% calc(100% - 0px),/* bottom right */ 
            calc(100% - 0px) 100%,/* bottom right */ 
            0px 100%,/* bottom left */ 
            0 calc(100% - 0px) /* bottom left */
        );
        --notched-tp-r: polygon(
            0% 0px,/* top left */ 
            0px 0%,/* top left */ 
            calc(100% - 10px) 0%,/* top right */ 
            100% 10px,/* top right */ 
            100% calc(100% - 0px),/* bottom right */ 
            calc(100% - 0px) 100%,/* bottom right */ 
            0px 100%,/* bottom left */ 
            0 calc(100% - 0px) /* bottom left */
        );
        --notched-md: polygon(
            0% 20px,/* top left */ 
            20px 0%,/* top left */ 
            calc(100% - 20px) 0%,/* top right */ 
            100% 20px,/* top right */ 
            100% calc(100% - 20px),/* bottom right */ 
            calc(100% - 20px) 100%,/* bottom right */ 
            20px 100%,/* bottom left */ 
            0 calc(100% - 20px) /* bottom left */
        );
        --notched-md-bt: polygon(
            0% 20px, /* top left */ 
            0px 0%, /* top left */ 
            0px 0%, /* top right */ 
            100% 0px, /* top right */ 
            100% calc(100% - 20px), /* bottom right */ 
            calc(100% - 20px) 100%, /* bottom right */ 
            20px 100%, /* bottom left */ 
            0 calc(100% - 20px) /* bottom left */
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
