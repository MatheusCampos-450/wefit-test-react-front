import { createContext, useContext } from "react";

interface IGlobalContext {}

const GlobalContext = createContext({} as IGlobalContext);

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context || Object.keys(context).length === 0) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider",
    );
  }

  return context;
};
