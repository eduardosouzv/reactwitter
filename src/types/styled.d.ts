import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      black: string;
      darkGray: string;
      lightGray: string;
      white: string;
    };
  }
}
