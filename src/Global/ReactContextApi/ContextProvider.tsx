import { createContext, FC, PropsWithChildren, useState } from "react";
interface iProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggle: () => void;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  header: boolean;
  setHeader: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu: () => void;
}

export const GlobalContext = createContext({} as iProps);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <GlobalContext.Provider
      value={{
        toggle,
        setToggle,
        handleToggle,
        menu,
        setMenu,
        header,
        setHeader,
        handleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
