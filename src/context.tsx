import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContextType {
  passwordLength: number;
  setPasswordLength: (num: number) => void;
}

const AppContext = createContext<ContextType>({} as ContextType);

function ContextProvider(props: PropsWithChildren) {
  const [passwordLength, setPasswordLength] = useState<number>(0);

  return (
    <AppContext.Provider value={{ passwordLength, setPasswordLength }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;

export function useGlobalContext() {
  return useContext(AppContext);
}
