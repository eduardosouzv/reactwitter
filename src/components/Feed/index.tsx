/* eslint-disable no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

import TweetButton from '../TweetButton';

interface ITweet {
  _id: string;
  author: string;
  content: string;
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
  mutation ($author: String!, $content: String!) {
    createTweet(author: $author, content: $content) {
      _id
      author
      content
    }
  }
`;

function delay(ms = 3000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function Feed() {
  // TODO: set it with current user logged
  const [currentUser] = useState<string>('souza');
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [, setIsPostingTweet] = useState<boolean>(false);
  const [tweetTextArea, setTweetTextArea] = useState<string>('');

  const [newTweet] = useMutation(NEW_TWEET);
  const { data } = useQuery<{tweets: ITweet[]}>(GET_TWEETS);

  useEffect(() => {
    if (data) {
      setTweets(data.tweets);
    }
  }, [data]);

  const notify = () => toast('Tweet enviado!', {
    position: 'bottom-center',
    className: 'bg-blue-400 text-white',
  });

  async function handleNewTweet() {
    setIsPostingTweet(true);
    const response = await newTweet({
      variables: {
        author: currentUser,
        content: tweetTextArea,
      },
    });

    await delay();

    const tweetCreated = response?.data?.createTweet;
    const { _id, author, content } = tweetCreated;

    setTweets((prev) => [{ _id, author, content }, ...prev]);
    setTweetTextArea('');
    setIsPostingTweet(false);
    notify();
  }

  function handleTweetTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTweetTextArea(event.target.value);
  }

  return (
    <div className="w-[600px] border-solid border-r-[1px] border-l-[1px] border-gray-800">
      <h1 className="text-2xl p-4">Home</h1>
      <div className="flex p-4 gap-2 border-gray-800 border-b-[1.5px]">
        <img className="w-12 h-12 rounded-full" src="http://github.com/eduardosouzv.png" alt="profile" />
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
        {tweets.map(({ _id, author, content }) => (
          <div key={_id} className="flex gap-2 py-3 px-3 border-solid border-b-[1px] border-gray-800">
            <img className="w-12 h-12 rounded-full mr-2" src="https://github.com/eduardosouzv.png" alt="" />
            <div>
              <span>
                <strong className="mr-3">{author}</strong>
                @souza
              </span>

              <div>
                {content}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
}
