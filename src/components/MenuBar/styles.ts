import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 128px;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding: 24px 16px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Menu = styled.div`
  margin-top: 32px;
`;

export const Icon = styled.div`
  font-size: 32px;
  padding: 0 16px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .user {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  
  img {
    border-radius: 50%;
    width: 48px;
  }

  div {
    margin-left: 12px;
  }
`;
