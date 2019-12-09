import React, { Component } from "react";
import EventDachboard from "../../features/event/EventDashboard/EventDachboard";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Re-vents</h1>
        <EventDachboard />
      </div>
    );
  }
}

export default App;
