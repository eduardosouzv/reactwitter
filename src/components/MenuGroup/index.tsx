import { ReactChild } from 'react';

import { Container } from './styles';

interface IMenuGroup {
  children: ReactChild;
  icon: string
}

export function MenuGroup({ children, icon }: IMenuGroup) {
  return (
    <Container>
      <i className={icon} />
      <span>{children}</span>
    </Container>
  );
}
