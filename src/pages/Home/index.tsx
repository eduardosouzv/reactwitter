import MenuBar from '../../components/MenuBar';
import Feed from '../../components/Feed';
import { useModal } from '../../hooks/useModal';

export default function Home() {
  const { LoginModal } = useModal();

  return (
    <div className="flex justify-center my-0 mx-auto">
      <MenuBar />
      <Feed />
      {LoginModal}
    </div>
  );
}
