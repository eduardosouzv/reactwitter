import styled from 'styled-components';

interface ISize {
  width: number;
  height: number;
}

export default styled.button<ISize>`
  width: ${(props: ISize) => `${props.width}px`};
  height: ${(props: ISize) => `${props.height}px`};

  border: none;
  border-radius: 32px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;
