import React from "react";
import { useMedia } from "use-media";

// Nav's
import Nav from "./Nav";
import NavMobile from "./NavMobile";

function Aside() {
  const isMobile = useMedia({ maxWidth: 768 });

  return isMobile ? <NavMobile /> : <Nav />;
}

export default Aside;
