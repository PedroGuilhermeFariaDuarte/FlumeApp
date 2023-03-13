import React from "react";

// Nav's
import Nav from "./Nav";
import NavMobile from "./NavMobile";

function Aside() {
  const isMobile = window.innerWidth <= 768 && true

  return isMobile ? <NavMobile /> : <Nav />;
}

export default Aside;
