import React, { memo } from "react";

// Global Components
import Aside from "../../components/Aside";
import Section from "../../components/Section";

// Style
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Aside />

      <Section />
    </Container>
  );
}
export default memo(Home);
