import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkGray};
  padding: 8px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .content {
    width: 100%;

    p {
      margin: 8px 0;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 128px;
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.lightGray};

  i {
    cursor: pointer;
  }
`;
