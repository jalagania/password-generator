import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContextType {
  passwordLength: number;
  setPasswordLength: (num: number) => void;
  optionsArray: string[];
  setOptionsArray: (str: string[] | ((arg: string[]) => string[])) => void;
}

const AppContext = createContext<ContextType>({} as ContextType);

function ContextProvider(props: PropsWithChildren) {
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [optionsArray, setOptionsArray] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{
        passwordLength,
        setPasswordLength,
        optionsArray,
        setOptionsArray,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;

export function useGlobalContext() {
  return useContext(AppContext);
}
