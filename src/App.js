import React from "react";
import Container from "react-bootstrap/Container";

import AppRouting from "./Router/AppRouting";

class App extends React.Component {
  render() {
    return (
      <Container>
        <AppRouting />
      </Container>
    );
  }
}

export default App;
