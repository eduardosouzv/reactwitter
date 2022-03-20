import { Container } from './styles';

interface ITopic {
  title: string;
  category: string;
  volumnOfTweets: number;
}

export default function Topic({ title, category, volumnOfTweets }: ITopic) {
  return (
    <Container>
      <span className="category">
        Topic - {category}
      </span>
      <span>{title}</span>
      <span className="volumn-of">
        {volumnOfTweets}K of tweets
      </span>
    </Container>
  );
}
