import Tweet from '../Tweet';
import TweetButton from '../TweetButton';
import {
  Container, TweetActions, NewTweetContainer, PageTitle, TweetList,
} from './styles';

export default function Feed() {
  return (
    <Container>
      <PageTitle>Home</PageTitle>

      <NewTweetContainer>
        <img src="http://github.com/eduardosouzv.png" alt="profile" />
        <TweetActions>
          <textarea placeholder="What's happening?" />
          <TweetButton className="tweet" width={128} height={34}>Tweet</TweetButton>
        </TweetActions>
      </NewTweetContainer>

      <TweetList>
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet
          author="Eduardo"
          tweetContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
         tempore iste dolore non praesentium sequi doloremque explicabo esse ducimus minus architecto ullam d
         olores itaque omnis? Voluptate nihil harum aperiam esse."
        />
        <Tweet author="Eduardo" tweetContent="a okda okdoaksdo kkdoso" />
        <Tweet author="Eduardo" tweetContent="a okda okdoaksdo kkdoso" />
        <Tweet author="Eduardo" tweetContent="a okda okdoaksdo kkdoso" />
      </TweetList>
    </Container>
  );
}
