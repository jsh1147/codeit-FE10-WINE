import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --gray-800: #2D3034;
    --gray-500: #9FACBD;
    --gray-300: #CFDBEA;
    --gray-100: #F2F4F8;
    --purple-100: #6A42DB;
    --purple-10: #F1EDFC;
    --black: #101318;
    --white: #FFFFFF;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  /** 스크롤바 커스텀 */
  *::-webkit-scrollbar {
    width: 6px;
    }

    /* 스크롤바: Track */
    *::-webkit-scrollbar-track {
      background-color: var(--gray-100);
      background-color: #fff;
      border-radius: 16px;
      margin: 24px 0;
    }
    
    /* 스크롤바: Handle */
    *::-webkit-scrollbar-thumb {
      background: var(--gray-500);
      border-radius: 16px;
    }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input, textarea, select {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }

  img, svg {
    vertical-align: bottom;
  }

  body {
    overflow-y: scroll;
    color: var(--gray-800);
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
  }
`;

export default GlobalStyle;
