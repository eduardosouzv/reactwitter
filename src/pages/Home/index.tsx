import MenuBar from '../../components/MenuBar';
import Feed from '../../components/Feed';
import { useModal } from '../../hooks/useModal';

export default function Home() {
  return (
    <div className="flex justify-center my-0 mx-auto">
      <MenuBar />
      <Feed />
    </div>
  );
}
