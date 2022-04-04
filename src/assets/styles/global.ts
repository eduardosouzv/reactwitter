import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;
  }
`;
