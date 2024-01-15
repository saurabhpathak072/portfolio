import { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

export const AppContext = createContext({
  isOpen: true,
});

const AppContextProvider = ({ children }) => {
    const {  width } = useWindowDimensions();

   
  const [isOpen, setIsOpen] = useState(width > 575?true:false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const isOpenCondition = width > 575?true:false;
    setIsOpen(isOpenCondition);
  

  }, [width])
  
  return (
    <AppContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
