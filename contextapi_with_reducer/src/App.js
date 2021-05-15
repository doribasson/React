import AppContextProvider from "./contexts/AppContextProvider";
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
