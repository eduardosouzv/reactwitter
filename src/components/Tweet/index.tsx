import { Actions, Container } from './styles';

interface ITweet {
  tweetContent: string;
  author: string
}

export default function Tweet({ tweetContent, author }: ITweet) {
  return (
    <Container>
      <img src="http://github.com/eduardosouzv.png" alt="profile" />
      <div className="content">
        <p><strong>{author}</strong> @souza</p>
        <p>{tweetContent}</p>
        <Actions>
          <i className="far fa-comment-alt" />
          <i className="fas fa-retweet" />
          <i className="far fa-heart" />
          <i className="fas fa-share" />
        </Actions>
      </div>
    </Container>
  );
}
