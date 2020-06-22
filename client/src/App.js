import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
