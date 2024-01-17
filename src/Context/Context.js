import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

export const AppContext = createContext({
  isOpen: true,
  setIsOpen: () => {},
  isMobile: false,
  isDesktop:false
});

const AppContextProvider = ({ children }) => {
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(width > 575 ? true : false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((open) => {
      return !open;
    });
  };

  useEffect(() => {
    const isDesktop = width > 575 ? true : false;
    setIsOpen(isDesktop);
    setIsDesktop(isDesktop);
    setIsMobile(!isDesktop);
  }, [width]);

  return (
    <AppContext.Provider value={{ isOpen,isMobile,isDesktop, toggleSidebar, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;