import { FaReact } from 'react-icons/fa';
import { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../hooks/useAuth';

interface ITweet {
  _id: string;
  author: string;
  content: string;
}

type ToastType = 'ERROR' | 'SUCCESS';

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

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function Home() {
  const { user, logout } = useAuth();
  const [tweetTextArea, setTweetTextArea] = useState<string>('');
  const [newTweet] = useMutation(NEW_TWEET);
  const { data, refetch: refetchTweets } = useQuery<{ tweets: ITweet[] }>(
    GET_TWEETS
  );

  const notify = (type: ToastType, message?: string) => {
    switch (type) {
      case 'SUCCESS':
        toast(message || 'sent.', {
          position: 'bottom-center',
          className: 'bg-blue-400 text-white',
        });
        break;
      case 'ERROR':
        toast.error(message || 'error, try again.', {
          position: 'bottom-center',
          className: 'bg-red-100 text-gray',
        });
    }
  };

  async function handleNewTweet() {
    if (!tweetTextArea) {
      notify('ERROR', 'you need to type something to send.');
      return;
    }

    await newTweet({
      variables: {
        author: user?.name,
        content: tweetTextArea,
      },
    });
    await delay();
    await refetchTweets();
    setTweetTextArea('');
    notify('SUCCESS');
  }

  function handleTweetTextareaChange(event: React.FormEvent<HTMLInputElement>) {
    setTweetTextArea(event.currentTarget.value);
  }

  return (
    <div className="w-[600px] mx-auto">
      <FaReact size={64} className="mx-auto mt-4" />

      <header className="text-center pb-3 border-b-[1px] border-gray-500 border-opacity-30">
        <span className="block">@{user?.name}</span>
        <button
          onClick={logout}
          className="text-sm text-gray-400 hover:text-red-400 transition-all duration-200"
        >
          logout
        </button>
      </header>

      <div className="border-b-[1px] border-gray-500 border-opacity-30">
        <input
          onChange={handleTweetTextareaChange}
          value={tweetTextArea}
          type="text"
          placeholder="Type something here..."
          className="bg-transparent p-3 placeholder:text-xs outline-none text-xs w-[80%]"
        />
        <button onClick={handleNewTweet} type="button" className="w-[20%] px-4">
          send it pls
        </button>
      </div>

      <main>
        {data?.tweets.map(({ _id, author, content }) => (
          <div
            key={_id}
            className="flex gap-2 border-b-[1px] border-gray-800 border-opacity-30"
          >
            <div>
              <span className="text-xs">@{author}</span>
              <div>{content}</div>
            </div>
          </div>
        ))}
      </main>

      <Toaster />
    </div>
  );
}
