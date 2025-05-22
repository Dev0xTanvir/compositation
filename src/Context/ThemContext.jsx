import { createContext, useState } from "react";

export const ThemContext = createContext();

export const ThemProbider = ({ children }) => {
  const [dark, setdark] = useState('dark');
  return (
    <ThemContext.Provider value={{dark, setdark}}>
      {children}
    </ThemContext.Provider>
  );
};
