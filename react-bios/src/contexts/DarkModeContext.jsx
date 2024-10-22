import { createContext, useState } from "react";
// STAP 1: Een nieuwe instantie aanmaken van onze context

const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {
  // State bijhouden
  // Functies inzetten

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
