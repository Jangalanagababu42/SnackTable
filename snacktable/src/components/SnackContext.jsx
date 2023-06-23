import React, { createContext, useContext } from "react";
import { useReducer } from "react";
import SnackReducer, { initialState } from "./SnackReducer";

const SnackContext = createContext();

function SnackProvider({ children }) {
  const [state, dispatch] = useReducer(SnackReducer, initialState);

  return (
    <SnackContext.Provider value={{ state, dispatch }}>
      {children}
    </SnackContext.Provider>
  );
}
const useSnack = () => useContext(SnackContext);
export { SnackProvider, useSnack };
