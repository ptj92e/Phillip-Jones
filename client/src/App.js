import React, { useState } from 'react';
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

function App() {

  let [pageState, setPageState] = useState({
    page: "home"
  });

  window.addEventListener('scroll', function() {
    var element = document.querySelector('#about');
    var position = element.getBoundingClientRect();
  
    // checking whether fully visible
    console.log(position.top, position.bottom);
    if(position.top <= 0 && position.bottom <= window.innerHeight) {
      console.log('Element is fully visible in screen');
    }
  
    // checking for partial visibility
    // if(position.top < window.innerHeight && position.bottom >= 0) {
    //   console.log('Element is partially visible in screen');
    // }
  });

  return (
    <div className="App">
      <Landing />
      <Navbar 
        page={pageState.page}
      />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
