import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Theme from './components/Theme/Theme';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';



function App() {


  // let lastScrollTop = 0;
  // window.addEventListener("wheel", (event) => {
  //   let st = window.pageYOffset;
  //   if (st > lastScrollTop) {
      
  //   } else {
  //     console.log("UP")
  //   }
  //   lastScrollTop = st;
  // });


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Theme />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}


export default App;