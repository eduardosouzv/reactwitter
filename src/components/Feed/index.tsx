import { ChangeEvent, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

import TweetButton from '../TweetButton';

import defaultProfilePicture from '../../assets/default.png';
import { useAuth } from '../../hooks/useAuth';

interface ITweet {
  id: string;
  author: {
    id: string;
    username: string;
  };
  content: string;
}

const GET_TWEETS = gql`
  query Tweets {
    tweets {
      id
      author {
        id
        username
      }
      content
    }
  }
`;

const NEW_TWEET = gql`
  mutation Tweet($authorId: String!, $content: String!) {
    createTweet(authorId: $authorId, content: $content) {
      id
    }
  }
`;

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function Feed() {
  const { user } = useAuth();
  const [tweetTextArea, setTweetTextArea] = useState<string>('');
  const [newTweet] = useMutation(NEW_TWEET);
  const { data, refetch: refetchTweets } = useQuery<{ tweets: ITweet[] }>(
    GET_TWEETS
  );

  const notify = () =>
    toast('Tweet enviado!', {
      position: 'bottom-center',
      className: 'bg-blue-400 text-white',
    });

  async function handleNewTweet() {
    await newTweet({
      variables: {
        authorId: user?.id,
        content: tweetTextArea,
      },
    });
    await delay();
    await refetchTweets();
    setTweetTextArea('');
    notify();
  }

  function handleTweetTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTweetTextArea(event.target.value);
  }

  return (
    <div className="w-[600px] border-solid border-r-[1px] border-l-[1px] border-gray-800">
      <h1 className="text-2xl p-4">Home</h1>
      <div className="flex p-4 gap-2 border-gray-800 border-b-[1.5px]">
        <img
          className="w-12 h-12 rounded-full"
          src={defaultProfilePicture}
          alt="profile"
        />
        <div className="flex flex-col w-full">
          <textarea
            className="bg-transparent resize-none text-base p-2 border-0
            border-gray-800 border-b-[1.5px] overflow-auto focus:outline-none"
            placeholder="What's happening?"
            onChange={handleTweetTextareaChange}
            value={tweetTextArea}
          />
          <TweetButton
            classNamePosition="w-32 h-10 mt-2 self-end"
            onClick={handleNewTweet}
          >
            Tweet
          </TweetButton>
        </div>
      </div>

      <div>
        {data?.tweets.map(({ id, author, content }) => (
          <div
            key={id}
            className="flex gap-2 py-3 px-3 border-solid border-b-[1px] border-gray-800"
          >
            <img
              className="w-12 h-12 rounded-full mr-2"
              src={defaultProfilePicture}
              alt=""
            />
            <div>
              <strong className="mr-3">@{author.username}</strong>
              <div>{content}</div>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
}
