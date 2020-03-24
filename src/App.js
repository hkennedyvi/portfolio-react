import React from "react";
// import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery"
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Portfolio /> */}
        <Gallery />
      </div>
    </Router>
  )
}

export default App;
