import { ReactChild, ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

interface IMenuGroup {
  children: ReactChild;
  icon: ReactElement<IconType>
}

export function MenuGroup({ children, icon }: IMenuGroup) {
  return (
    <div className="cursor-pointer py-2 px-4 my-2 flex place-items-center gap-2
    hover:bg-gray-500 rounded-2xl transition duration-300"
    >
      <div className="mr-4 text-2xl content-center">{icon}</div>
      <span className="text-2xl">{children}</span>
    </div>
  );
}
