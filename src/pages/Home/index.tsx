import { Container } from './styles';

import MenuBar from '../../components/MenuBar';
import Feed from '../../components/Feed';

export default function Home() {
  return (
    <Container>
      <MenuBar />
      <Feed />
    </Container>
  );
}
