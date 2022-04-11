/* eslint-disable no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

import Tweet from '../Tweet';
import TweetButton from '../TweetButton';

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

const GET_TWEETS = gql`
  query {
    tweets {
      _id
      author
      content
    }
  }
`;

const NEW_TWEET = gql`
  mutation($author: String!, $content: String!) {
    createTweet(author: $author, content: $content) {
      _id
      author
      content
    }
  }
`;

export default function Feed() {
  // TODO: set it with current user logged
  const [currentUser] = useState<string>('souza');
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [tweetTextArea, setTweetTextArea] = useState<string>('');

  const { loading, error, data } = useQuery<{tweets: ITweet[]}>(GET_TWEETS);
  const [newTweet] = useMutation(NEW_TWEET);

  useEffect(() => {
    if (data) {
      setTweets(data.tweets);
    }
  }, [data]);

  async function handleNewTweet() {
    const response = await newTweet({
      variables: {
        author: currentUser,
        content: tweetTextArea,
      },
    });

    const tweetCreated = response?.data?.createTweet;
    const { _id, author, content } = tweetCreated;

    setTweets((prev) => [{ _id, author, content }, ...prev]);
    setTweetTextArea('');
  }

  function handleTweetTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTweetTextArea(event.target.value);
  }

  return (
    <Container>
      <PageTitle>Home</PageTitle>
      <NewTweetContainer>
        <img src="http://github.com/eduardosouzv.png" alt="profile" />
        <TweetActions>
          <textarea
            placeholder="What's happening?"
            onChange={handleTweetTextareaChange}
            value={tweetTextArea}
          />
          <TweetButton
            onClick={handleNewTweet}
            className="tweet"
            width={128}
            height={34}
          >
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
