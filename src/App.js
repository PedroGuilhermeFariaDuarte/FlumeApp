import React from "react";

// Routers
import Routers from "./routers";

// Global style
import Global from "./style/global";
import "./style/mobile/index.css";

// Global components
import BarMusic from "./components/BarMusic";

function App() {
  return (
    <>
      <Global />
      <Routers />
      {/* <BarMusic /> */}
    </>
  );
}

export default App;
