import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        margin: 0;
        font-family: 'Dekko', cursive;
        font-size: 0.6rem;
        font-weight: 100;
        line-height: 1rem;
        color: #525f7f;
        text-align: left;
        background: linear-gradient(35deg,#11cdef,#1171ef) !important;
    }

    .hero-section {
        transition: all 0.8s ease-in-out;
    }

    body.dark__mode .hero-section  {
        background: linear-gradient(35deg,#100f0f,#131b22) !important;
    }

    ul li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .container {
        width: 1040px;
        max-width: 95%;
        margin: auto;
    }



`;

export default GlobalStyles;
