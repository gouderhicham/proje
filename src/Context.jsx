import { createContext, useState } from "react";
// export
export const AppContext = createContext();
// context function
const ContextNext = ({ children }) => {
  const [name, setName] = useState("HCIHAM");
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default ContextNext;
