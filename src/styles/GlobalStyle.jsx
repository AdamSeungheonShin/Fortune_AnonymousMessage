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
    font-family: 'Noto Sans KR', Pretendard;
  }
  button {
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  input{
    padding: 0;
    margin: 0;
  }
  input:focus, textarea {
    outline: none;
  }
`;

export default GlobalStyle;
