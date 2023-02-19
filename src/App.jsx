import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

export default function App() {
  const initial = [
    { name: 'general', id: 0, children: [{ id: 0 }]},
    { name: 'education', id: 1, children: [{ id: 0 }]},
    { name: 'experience', id: 2, children: [{ id: 0 }]},
    { name: 'skills', id: 3, children: [{ id: 0 }]}
  ];

  // Key ID's
  const [educationId, setEducationId] = useState(1);
  const [experienceId, setExperienceId] = useState(1);
  const [skillsId, setSkillsId] = useState(1);

  const [data, setData] = useState(initial);

  // Add component to passed section
  function handleAddComponent(name) {
    let next;
    if (name === 'education') {
      next = [
        ...data,
        ...data[0].children,
        data[1].children = [
          ...data[1].children,
          // Add child
          { id: educationId }
        ],
        ...data[2].children,
        ...data[3].children
      ];
      // Incr key for next component
      setEducationId(educationId + 1);

    } else if (name === 'experience') {
      next = [
        ...data,
        ...data[0].children,
        ...data[1].children,
        data[2].children = [
          ...data[2].children,
          // Add child
          { id: experienceId }
        ],
        ...data[3].children
      ];
      // Incr key for next component
      setExperienceId(experienceId + 1);

    }  else {
      next = [
        ...data,
        ...data[0].children,
        ...data[1].children,
        ...data[2].children,
        data[3].children = [
          ...data[3].children,
          // Add child
          { id: experienceId }
        ],
      ];
      // Incr key for next component
      setSkillsId(skillsId + 1);

    }
    setData(next);
  }

  // Remove child from array
  function handleDelete(obj) {
    if (obj.name === 'education') {
      // Filter out child
      const filtered = data[1].children.filter(child => child.id !== obj.id);
      setData([
        ...data,
        ...data[0].children,
        data[1].children = [
          // Pass new array
          ...filtered
        ],
        ...data[2].children,
        ...data[3].children
      ]);

    } else if (obj.name === 'experience') {
      // Filter out child
      const filtered = data[2].children.filter(child => child.id !== obj.id);
      setData([
        ...data,
        ...data[0].children,
        ...data[1].children,
        data[2].children = [
          // Pass new array
          ...filtered
        ],
        ...data[3].children
      ]);

    } else if (obj.name === 'skills') {
      // Filter out child
      const filtered = data[3].children.filter(child => child.id !== obj.id);
      setData([
        ...data,
        ...data[0].children,
        ...data[1].children,
        ...data[2].children,
        ...data[3].children = [
          // Pass new array
          ...filtered
        ]
      ]);
    }
  }

  // Get components and any children for render
  function getComponent(obj) {
    switch (obj.name) {

      case 'general':
        return (
          <React.Fragment key={obj.id}>
            <General />
            <br />
          </React.Fragment>
        )

      case 'education':
        return (
          <React.Fragment key={obj.id}>
            {/* Render children, if any. Pass deleter function to child */}
            {obj.children.map((child) =>
              <Education key={child.id} id={child.id} handleDelete={handleDelete} />
            )}
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                {/* Specify button text based on if any children */}
                {obj.children.length > 0 ? 'Add More Education' : 'Add Education'}
              </button> 
          </React.Fragment>
        )

      case 'experience':
        return (
          <React.Fragment key={obj.id}>
              {/* Render children, if any. Pass deleter function to child */}
              {obj.children.map(child =>
                <Experience key={child.id} id={child.id} handleDelete={handleDelete} />
              )}
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                {/* Specify button text based on if any children */}
                {obj.children.length > 0 ? 'Add More Experience' : 'Add Experience'}
              </button>
          </React.Fragment>
        )

      case 'skills':
        return (
          <React.Fragment key={obj.id}>
            {/* Render children, if any. Pass deleter function to child */}
            {obj.children.map(child =>
              <Skills key={child.id} id={child.id} handleDelete={handleDelete} />
            )}
            <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
              {/* Specify button text based on if any children */}
              {obj.children.length > 0 ? 'Add More Skills' : 'Add Skills'}
            </button>
          </React.Fragment>
        )

      default:
        break;
    }  
  }

  return (
    <div className="App">

      <div className="editor">
        {/* Render data */}
        {data.map(obj =>
          // Get data to render
          getComponent(obj)
        )}
      </div>

      <div className="resume">
        
      </div>
    </div>
  );
}
