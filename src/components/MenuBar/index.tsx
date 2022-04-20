import {
  FaHome, FaBell, FaReact, FaEnvelope, FaUserAlt,
} from 'react-icons/fa';

import TweetButton from '../TweetButton';
import { MenuGroup } from '../MenuGroup';

export default function MenuBar() {
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

          <TweetButton
            className="w-32 h-11"
          >
            Tweet
          </TweetButton>
        </div>
      </div>

      <div className="flex">
        <img
          src="https://github.com/eduardosouzv.png"
          alt="profile"
          className="rounded-full w-12"
        />
        <div className="ml-3">
          <strong>eduardo</strong>
          <p className="text-gray-500">@souza</p>
        </div>
      </div>

    </div>
  );
}
