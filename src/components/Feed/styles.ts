import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-left: 1px solid ${({ theme }) => theme.colors.darkGray};

  .toaster {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  padding: 16px;
`;

export const NewTweetContainer = styled.div`
 display: flex;
  padding: 16px;
  gap: 8px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkGray};
      
  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
`;

export const TweetActions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .tweet {
    align-self: flex-end;
  }

  textarea {
    background: transparent;
    resize: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    padding: 8px;
    border: 0;
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkGray};

    min-height: 40px;
    overflow: auto;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGray};
      font-size: 18px;
    }
  }
`;

export const TweetList = styled.div`
  
`;
