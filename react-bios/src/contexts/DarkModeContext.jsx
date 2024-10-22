import { createContext, useContext, useState } from "react";
// STAP 1: Een nieuwe instantie aanmaken van onze context

const DarkModeContext = createContext();

const DarkModeContextProvider = (props) => {
  // State bijhouden
  // Functies inzetten

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
      }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

// Custom hook -> functie dat start met het use keyword

export const useDarkMode = () => useContext(DarkModeContext);
