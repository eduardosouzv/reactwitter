import { ReactChild, ReactElement } from 'react';
import { IconType } from 'react-icons/lib';
import { Container } from './styles';

interface IMenuGroup {
  children: ReactChild;
  icon: ReactElement<IconType>
}

export function MenuGroup({ children, icon }: IMenuGroup) {
  return (
    <Container>
      {icon}
      <span>{children}</span>
    </Container>
  );
}
