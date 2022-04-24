import ReactDOM from 'react-dom';

import { AiOutlineClose } from 'react-icons/ai';
import { useModal } from '../../hooks/useModal';

export default function LoginModal() {
  const { handleVisibility } = useModal();

  return (
    ReactDOM.createPortal(
      <div
        className="fixed top-0 right-0 left-0 z-50 w-full h-screen bg-opacity-75
        backdrop-blur-sm flex justify-center items-center overflow-hidden"
      >
        <div className="p-4 w-[300px] h-[400px]">
          <div className="rounded-lg shadow-2xl shadow-gray-500 bg-black">
            <div className="flex justify-center p-2 items-center">
              <span className="pl-3">Login</span>

              <button
                type="button"
                onClick={() => handleVisibility(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200
                hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex
                items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <AiOutlineClose />
              </button>
            </div>
            <form className="px-6 pb-4 space-y-6">
              <div>
                <span
                  className="block mb-2 text-sm font-medium text-gray-300"
                >User
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-sm rounded-lg focus:ring-blue-500
                  focus:border-blue-500 block w-full p-2.5 bg-gray-600
                  border-gray-500 placeholder-gray-400 text-white"
                  placeholder="myawesomeuser"
                  required
                />
              </div>
              <div>
                <span
                  className="block mb-2 text-sm font-medium text-gray-300"
                >Your password
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="text-sm
                  rounded-lg focus:ring-blue-500 focus:border-blue-500 block
                  w-full p-2.5 bg-gray-600 border-gray-500
                  placeholder-gray-400 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none
              font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-400
              hover:bg-blue-700 focus:ring-blue-800"
              >Login to your account
              </button>
              <div className="text-sm font-medium text-gray-300">
                Not registered?
                <span className="hover:underline text-blue-400 ml-1 cursor-pointer">Create account</span>
              </div>
            </form>
          </div>
        </div>
      </div>,
    document.getElementById('modal-root') as HTMLElement,
    )
  );
}
