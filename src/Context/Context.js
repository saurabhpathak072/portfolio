import { createContext, useState } from "react";

export const AppContext = createContext({
  isOpen: true,
});

const AppContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
