import React from "react";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Portfolio />
      </div>
    </Router>
  )
}

export default App;
