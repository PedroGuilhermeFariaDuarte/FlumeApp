import React from "react";

// Routers
import Routers from "./routers";

// Global style
import Global from "./style/global";
import "./style/mobile/index.css";

function App() {
  return (
    <>
      <Global />
      <Routers />      
    </>
  );
}

export default App;
