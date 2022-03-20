import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  backgroung-color: red;
  margin: 0 auto;
`;

export const Trending = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  margin: 24px;
  border-radius: 24px;
  min-width: 400px;
  max-height: 600px;

  overflow: auto;

  h1 {
    padding: 18px;
  }
`;
