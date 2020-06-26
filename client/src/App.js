import React from 'react';
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar
      />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
