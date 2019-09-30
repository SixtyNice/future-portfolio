import React from 'react';
import './App.css';
import About from './components/About/About';
import Theme from './components/Theme/Theme';
import Skill from './components/Skill/Skill'; 
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
       <About/>
      <Skill/>

    </div>
    </div>
  );
}

export default App;
