import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <General />
        <Education />
        <Experience />
        <Skills />
      </header>
    </div>
  );
}

export default App;
