import React, { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";

const Hooks = () => {
  const [dark, setdark] = useState([{}]);
  const UseRef = useRef();
  useEffect(() => {
    setdark(!dark);
  }, []);

  const usecontext = createContext();

  const useprovider = ({ children }) => {
    <usecontext.Provider value={"hi"}>{children}</usecontext.Provider>;
  };

  const data = useContext(useprovider);

  console.log('tanvir');

  return <div></div>;
};

export default Hooks;
