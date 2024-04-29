import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Pretendard', sans-serif;  
  }
  button {
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  input, textarea{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    resize: none;
  }
  input:focus, textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;
