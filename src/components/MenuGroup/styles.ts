import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 16px;
  }

  & + & {
    margin-top: 8px;
  }

  i {
    margin-right: 16px;
    font-size: 24px;
  }

  span {
    font-size: 24px;
  }
`;
