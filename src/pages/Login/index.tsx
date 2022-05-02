import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaReact } from 'react-icons/fa';

import { useAuth } from '../../hooks/useAuth';

type FormValues = {
  username: string;
  password: string;
};

export default function Login() {
  const { login } = useAuth();

  const notify = () =>
    toast.error('Tente novamente.', {
      position: 'bottom-center',
      className: 'bg-red-100 text-gray',
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  async function onSubmit({ username, password }: FormValues) {
    try {
      await login({ username, password });
    } catch {
      setValue('username', '');
      setValue('password', '');
      notify();
    }
  }

  return (
    <div className="flex justify-center my-0 mx-auto">
      <aside className="bg-gray-300 h-screen w-2/4 flex justify-center items-center">
        <FaReact color="black" size={128} className="animate-pulse" />
      </aside>

      <aside className="h-screen w-2/4 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4 w-96"
        >
          <h1 className="text-center text-5xl mb-4">Welcome!</h1>

          <div className="mb-4">
            <span className="block text-white text-sm font-bold mb-2">
              Username
            </span>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && 'border-red-500'
              }`}
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', { required: true })}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Username is required
              </p>
            )}
          </div>
          <div className="mb-6">
            <span className="block text-white text-sm font-bold mb-2">
              Password
            </span>
            <input
              className={`shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline border ${
                errors.password && 'border-red-500'
              }`}
              id="password"
              type="password"
              placeholder="******************"
              {...register('password', { required: true })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Password is required
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
            >
              Sign In
            </button>
            <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Create account
            </span>
          </div>
        </form>
        <Toaster />
      </aside>
    </div>
  );
}
