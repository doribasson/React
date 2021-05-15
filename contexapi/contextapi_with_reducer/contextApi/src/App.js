import React from "react";
import AppContextProvider from "./contexts/AppProvider";
import Home from "./components/Home";
import Search from "./components/Search";
function App() {
  return (
    <>
      <AppContextProvider>
        <Home />
        <Search />
      </AppContextProvider>
    </>
  );
}

export default App;
