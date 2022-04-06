/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import Tweet from '../Tweet';
import TweetButton from '../TweetButton';
import httpClient from '../../services/utils/httpClient';

import {
  Container,
  TweetActions,
  NewTweetContainer,
  PageTitle,
  TweetList,
} from './styles';

interface ITweet {
  _id: string
  author: string
  content: string
}

export default function Feed() {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  async function getTweets() {
    const response = await httpClient.graphql(`
      query {
        tweets {
          _id
          author
          content
        }
      }
    `);

    setTweets(response.tweets);
  }

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <Container>
      <PageTitle>Home</PageTitle>

      <NewTweetContainer>
        <img src="http://github.com/eduardosouzv.png" alt="profile" />
        <TweetActions>
          <textarea placeholder="What's happening?" />
          <TweetButton className="tweet" width={128} height={34}>
            Tweet
          </TweetButton>
        </TweetActions>
      </NewTweetContainer>

      <TweetList>
        {tweets.map(({ _id, author, content }) => (
          <Tweet key={_id} author={author} tweetContent={content} />
        ))}
      </TweetList>
    </Container>
  );
}
