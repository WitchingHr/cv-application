import React, { useState, createContext } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import initial from './data';
import './App.css';

export const DataContext = createContext(null);

export default function App() {
  // Key ID's
  const [educationId, setEducationId] = useState(1);
  const [experienceId, setExperienceId] = useState(1);
  const [skillsId, setSkillsId] = useState(1);

  const [data, setData] = useState(initial);

  // Add component to passed section
  function handleAddComponent(name) {
    let next;
    if (name === 'education') {
      next = data.map(category => {
        if (category.id === 1) {
          return {...category, children: [
            ...data[1].children,
            {
              id: educationId,
              degree: 'Degree or Certificate',
              school: 'School',
              from: 'From',
              to: 'To'
            }
          ]}
        } else {
          return category;
        }
      });
      // Incr key for next component
      setEducationId(educationId + 1);

    } else if (name === 'experience') {
      next = data.map(category => {
        if (category.id === 2) {
          return {...category, children: [
            ...data[2].children,
            {
              id: experienceId,
              job: 'Job Title',
              company: 'Company',
              responsibilities: 'Responsibilities',
              from: 'From',
              to: 'To'
            }
          ]}
        } else {
          return category;
        }
      });
      // Incr key for next component
      setExperienceId(experienceId + 1);

    }  else {
      next = data.map(category => {
        if (category.id === 3) {
          return {...category, children: [
            ...data[3].children,
            { 
              id: skillsId,
              skill: 'Skill'
            }
          ]}
        } else {
          return category;
        }
      });
      // Incr key for next component
      setSkillsId(skillsId + 1);
    }
    setData(next);
  }

  // Remove child from array
  function handleDelete(obj) {
    if (obj.category === 'education') {
      // Filter out child
      const filtered = data[1].children.filter((child) => child.id !== obj.id);
      setData(data.map(category => {
        if (category.id === 1) {
          return {...category, children: filtered}
        } else {
          return category;
        }
      }));

    } else if (obj.category === 'experience') {
      // Filter out child
      const filtered = data[2].children.filter((child) => child.id !== obj.id);
      setData(data.map(category => {
        if (category.id === 2) {
          return {...category, children: filtered}
        } else {
          return category;
        }
      }));

    } else if (obj.category === 'skills') {
      // Filter out child
      const filtered = data[3].children.filter((child) => child.id !== obj.id);
      setData(data.map(category => {
        if (category.id === 3) {
          return {...category, children: filtered}
        } else {
          return category;
        }
      }));
    }
  }

  // Get components and any children for render
  function getComponent(obj) {
    switch (obj.name) {

      case 'general':
        return (
          <React.Fragment key={obj.id}>
            <General />
          </React.Fragment>
        )

      case 'education':
        return (
          <React.Fragment key={obj.id}>
            {/* Render children, if any. Pass deleter function to child */}
            {obj.children.map((child) =>
              <Education key={child.id} id={child.id} handleDelete={handleDelete} />
            )}
            {obj.children.length < 2 && 
              <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                {/* Specify button text based on if any children */}
                {obj.children.length > 0 ? 'Add More Education' : 'Add Education'}
              </button>
            }
          </React.Fragment>
        )

      case 'experience':
        return (
          <React.Fragment key={obj.id}>
              {/* Render children, if any. Pass deleter function to child */}
              {obj.children.map(child =>
                <Experience key={child.id} id={child.id} handleDelete={handleDelete} />
              )}
              {obj.children.length < 3 && 
                <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
                  {/* Specify button text based on if any children */}
                  {obj.children.length > 0 ? 'Add More Experience' : 'Add Experience'}
                </button>
              }
          </React.Fragment>
        )

      case 'skills':
        return (
          <React.Fragment key={obj.id}>
            {/* Render children, if any. Pass deleter function to child */}
            {obj.children.map(child =>
              <Skills key={child.id} id={child.id} handleDelete={handleDelete} />
            )}
            {obj.children.length < 5 && 
            <button className="add-more" onClick={() => handleAddComponent(obj.name)}>
              {/* Specify button text based on if any children */}
              {obj.children.length > 0 ? 'Add More Skills' : 'Add Skills'}
            </button>
            }
          </React.Fragment>
        )

      default:
        break;
    }  
  }

  return (
    <div className="App">
      <DataContext.Provider value={{data, setData}}>
        <div className="editor">
          {data.map(obj =>
            // Get data to render
            getComponent(obj)
          )}
        </div>

        <div className='wrapper'>
          <div className="gradient color-1">
            <Resume data={data} />
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
}
