import { Container, Trending } from './styles';

import MenuBar from '../../components/MenuBar';
import Feed from '../../components/Feed';
import Topic from '../../components/Topic';

export default function Home() {
  return (
    <Container>
      <MenuBar />
      <Feed />
      <Trending>
        <h1>Trending</h1>
        <Topic
          category="Development"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          volumnOfTweets={3}
        />
        <Topic
          category="Development"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          volumnOfTweets={3}
        />
      </Trending>
    </Container>
  );
}
