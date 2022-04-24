import {
  createContext, ReactChild, ReactElement, useContext, useMemo, useState,
} from 'react';
import LoginModal from '../components/LoginModal';

interface IModalContext {
  LoginModal: ReactElement | null
  handleVisibility: (status: boolean) => void
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export function ModalProvider({ children }: {children: ReactChild}) {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility(status: boolean) {
    setIsVisible(status);
  }

  const values = useMemo(() => ({
    LoginModal: isVisible ? <LoginModal /> : null,
    handleVisibility,
  }), [isVisible]);

  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
