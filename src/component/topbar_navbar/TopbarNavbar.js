import React, { useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar";

export const MenuContext = React.createContext();
const initialState = false;
const reducer = (state, action) => {
  switch (action) {
    case "change":
      return !state;
  }
};
export const TopbarNavbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MenuContext.Provider
        value={{ menuState: state, menuDispatch: dispatch }}
      >
        <Topbar />
        <Navbar />
      </MenuContext.Provider>
    </>
  );
};
