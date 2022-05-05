import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type FormValues = {
  username: string;
  password: string;
  repeatPassword: string;
};

export default function Register() {
  const { registerUser } = useAuth();

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
    setError,
  } = useForm<FormValues>();

  async function onSubmit({ username, password, repeatPassword }: FormValues) {
    try {
      if (password !== repeatPassword) {
        setError('password', { message: '' });
        setError('repeatPassword', { message: 'asd' });
        return;
      }
      await registerUser({ username, password });
    } catch {
      setValue('username', '');
      setValue('password', '');
      notify();
    }
  }

  return (
    <div className="flex justify-center my-0 mx-auto w-2/5">
      <aside className="h-screen w-2/4 flex justify-center items-center ">
        <FaReact size={128} className="animate-pulse" />
      </aside>

      <aside className="h-screen w-2/4 flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-8 pt-6 pb-8 mb-4 w-96"
        >
          <h1 className="text-center text-5xl mb-4">create account</h1>

          <div className="mb-4">
            <span className="block text-white text-sm font-bold mb-2">
              Username
            </span>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-black leading-tight focus:outline-none focus:shadow-outline ${
                errors.username && 'border-red-500'
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
              {...register('password', { required: true, min: 4 })}
            />
            {Boolean(errors.password && !errors.repeatPassword) && (
              <p className="text-red-500 text-xs italic">
                Password is required
              </p>
            )}

            <span className="block text-white text-sm font-bold mb-2">
              Repeat Password
            </span>
            <input
              className={`shadow appearance-none rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline border ${
                errors.repeatPassword && 'border-red-500'
              }`}
              id="repeatPassword"
              type="password"
              placeholder="******************"
              {...register('repeatPassword', { min: 4 })}
            />
            {errors.repeatPassword && (
              <p className="text-red-500 text-xs italic">
                Password should be equals
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <span className="inline-block align-baseline font-bold text-sm text-gray-500">
              Have an account?
              <Link
                to="/login"
                className="ml-1 text-gray-300 hover:text-gray-400"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
        <Toaster />
      </aside>
    </div>
  );
}
