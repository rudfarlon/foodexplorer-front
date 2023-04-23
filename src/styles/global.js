import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    background-color: #000A0F;
    font-size: 1.6rem;
  }

  input, label, textarea, span {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  }

  a, span, p, h1, h2, button {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    text-decoration: none;
  } 
`;