import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;

  &:hover {
    transition: 0.1s;
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  }

  .volumn-of, .category {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
