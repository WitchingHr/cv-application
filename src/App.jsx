import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

function App() {
  const initial = [
    { name: 'general', id: 0, sort: 0 },
    { name: 'education', id: 1, sort: 1 },
    { name: 'experience', id: 2, sort: 2 },
    { name: 'skills', id: 3, sort: 3 }
  ];

  const [id, setId] = useState(4);
  const [data, setData] = useState(initial);

  function handleAddComponent(name) {
    let sort;
    switch (name) {
      case 'education':
        sort = 1;
        break;
      case 'experience':
        sort = 2;
        break;
      case 'skills':
        sort = 3;
        break;
      default:
        break;
    }

    const next = [
      ...data,
      { name: name, id: id, sort: sort }
    ];

    next.sort((a, b) => {
      if (a.sort < b.sort) return -1;
      if (a.sort > b.sort) return 1;
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
    });

    setData(next);
    setId(id + 1);
  }

  function getComponent(obj) {
    switch (obj.name) {
      case 'general':
        return <General key={obj.id} />
      case 'education':
        return (
          <React.Fragment key={obj.id}>
            <Education />
            {obj.id === 1 && (
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                Add More Education  
              </button> 
            )}
          </React.Fragment>
        )
      case 'experience':
        return (
          <React.Fragment key={obj.id}>
            <Experience />
            {obj.id === 2 && (
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                Add More Experience
              </button>
            )}
          </React.Fragment>
        )
      case 'skills':
        return (
          <React.Fragment key={obj.id}>
            <Skills />
            {obj.id === 3 && (
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                Add More Skills
              </button>
            )}
          </React.Fragment>
        )
      default:
        break;
    }  
  }

  return (
    <div className="App">
      <div className="editor">
        {data.map(obj =>
          getComponent(obj)
        )}
      </div>
      <div className="resume">

      </div>
    </div>
  );
}

export default App;
