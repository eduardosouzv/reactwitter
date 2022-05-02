import { FaHome, FaBell, FaReact, FaEnvelope, FaUserAlt } from 'react-icons/fa';

import { MenuGroup } from '../MenuGroup';

import { useAuth } from '../../hooks/useAuth';

import defaultProfilePicture from '../../assets/default.png';

export default function MenuBar() {
  const { logout, user } = useAuth();

  return (
    <div className="pt-6 pr-4 pb-6 pl-0 flex flex-col justify-between h-screen sticky top-0">
      <div>
        <div className="flex cursor-default mx-4 select-none">
          <FaReact size={22} />
          <span className="ml-2">Reactwitter</span>
        </div>
        <div>
          <div className="mt-8">
            <MenuGroup icon={<FaHome size={22} />}>Home</MenuGroup>
            <MenuGroup icon={<FaBell size={22} />}>Notifications</MenuGroup>
            <MenuGroup icon={<FaEnvelope size={22} />}>Messages</MenuGroup>
            <MenuGroup icon={<FaUserAlt size={22} />}>Profile</MenuGroup>
          </div>
        </div>
      </div>

      <div className="text-white"></div>

      <div className="flex">
        <img
          src={defaultProfilePicture}
          alt="profile"
          className="rounded-full w-12"
        />
        <div className="ml-3">
          <strong className="block">@{user?.name}</strong>
          <button
            onClick={logout}
            className="text-gray-500 hover:text-red-400 cursor-pointer"
            type="button"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
