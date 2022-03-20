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
          <i className="fab fa-twitter" />
        </Icon>

        <Menu>
          <MenuGroup icon="fas fa-home">Home</MenuGroup>
          <MenuGroup icon="fas fa-hashtag">Explore</MenuGroup>
          <MenuGroup icon="fas fa-bell">Notifications</MenuGroup>
          <MenuGroup icon="fas fa-envelope">Messages</MenuGroup>
          <MenuGroup icon="fas fa-bookmark">Bookmarks</MenuGroup>
          <MenuGroup icon="fas fa-list">Lists</MenuGroup>
          <MenuGroup icon="fas fa-user">Profile</MenuGroup>
          <MenuGroup icon="fas fa-ellipsis-h">More</MenuGroup>
        </Menu>

        <TweetButton
          width={164}
          height={48}
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
