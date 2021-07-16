import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Sidebar from "./components/pages/Sidebar"; //for testing
import Home from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
