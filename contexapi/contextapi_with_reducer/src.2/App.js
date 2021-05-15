import React from "react";
// import {AppContextProvider} from "./context/main";
import { AppContextProvider } from "./context/main";
import AppComponent from "./component/main";
import OtherPage from "./component/OtherPage";
function App() {
  return (
    <AppContextProvider>
      <AppComponent />
      <OtherPage />
    </AppContextProvider>
  );
}
export default App;

//go to AppContextProvider in contex/main/js and give the child AppComponent as children
//then in contex/main/ do the contexApi all the function and state for drilling function and state between component.
//then the {children} will show the component <AppComponent /> because he is the chaild
