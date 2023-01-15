import React, { FC } from "react";
import Home from "./pages/home/Index";
import Navigation from "./components/navigation/Navigation";

export const App: FC = () => {
  return (
    <div className="App">
      <h1 className="App-name">Gabs</h1>
      <Home />
      <Home />
      <Navigation />
    </div>
  );
};
export default App;
