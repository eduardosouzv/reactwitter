import {
  FaHome, FaBell, FaReact, FaEnvelope, FaUserAlt,
} from 'react-icons/fa';
import {
  Container, Menu, Icon, Profile,
} from './styles';

import TweetButton from '../TweetButton';
import { MenuGroup } from '../MenuGroup';

export default function MenuBar() {
  return (
    <Container>
      <div>
        <Icon>
          <FaReact size={22} />
          Reactwitter
        </Icon>

        <Menu>
          <MenuGroup icon={<FaHome size={22} />}>Home</MenuGroup>
          <MenuGroup icon={<FaBell size={22} />}>Notifications</MenuGroup>
          <MenuGroup icon={<FaEnvelope size={22} />}>Messages</MenuGroup>
          <MenuGroup icon={<FaUserAlt size={22} />}>Profile</MenuGroup>
        </Menu>

        <TweetButton
          className="w-32 h-11"
        >
          Tweet
        </TweetButton>
      </div>

      <Profile>
        <img
          src="https://github.com/eduardosouzv.png"
          alt="profile"
        />
        <div>
          <strong>eduardo</strong>
          <p className="user">@souza</p>
        </div>
      </Profile>
    </Container>
  );
}
