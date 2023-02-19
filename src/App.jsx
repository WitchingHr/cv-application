import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="editor">
        <General />
        <Education />
        <Experience />
        <Skills />
      </div>
      <div className="resume">

      </div>
    </div>
  );
}

export default App;
