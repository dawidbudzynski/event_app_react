import React, { Component, Fragment } from "react";
import EventDachboard from "../../features/Event/EventDashboard/EventDachboard";
import NavBar from "../../features/NavBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <EventDachboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
