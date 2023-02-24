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
  function handleAddComponent(id) {
    // Get next data
    const next = data.map(category => {
      if (category.id === id) {

        // Add Education
        if (id === 1) {
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

        // Add Experience
        } else if (id === 2) {
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

        // Add Skill
        } else if (id === 3) {
        // Add Skill
        } else if (id === 3) {
          return {...category, children: [
            ...data[3].children,
            { 
              id: skillsId,
              skill: 'Skill'
            }
          ]}
        }

      } else {
        return category;
      }
    });

    // Update data
    setData(next);

    // Increment key
    if (id === 1) {
      setEducationId(educationId + 1);
    } else if (id === 2) {
      setExperienceId(experienceId + 1);
    } else if (id === 3) {
      setSkillsId(skillsId + 1);
    }
  }

  // Remove child from array
  function handleDelete(obj) {
    // Filter out child
    const filtered = data[obj.categoryId].children.filter(
      (child) => child.id !== obj.id
    );
    setData(
      data.map(category => {
        if (category.id === obj.categoryId) {
          return {...category, children: filtered}
        } else {
          return category;
        }
      })
    );
  }

  // Get components and any children for render
  function getComponent(category) {
    let name;
    let length;
    if (category.id === 1) {
      name = 'Education';
      length = 2;
    } else if (category === 2) {
      name = 'Experience';
      length = 3;
    } else {
      name = 'Skills';
      length = 5;
    }

    return (
      <React.Fragment key={category.id}>
        {category.id === 0 ? (
          <General />
          ) : (
            // Render children, pass deleter function to child
            category.children.map((child) =>
              (function() {
                switch (category.id) {
                  case 1:
                    return <Education key={child.id} id={child.id} handleDelete={handleDelete} />
                  case 2:
                    return <Experience key={child.id} id={child.id} handleDelete={handleDelete} />
                  case 3:
                    return <Skills key={child.id} id={child.id} handleDelete={handleDelete} />
                  default:
                    return null;
                }
              })()
            )
          )
        }
        {category.id !== 0 &&
          category.children.length < length && 
            <button className="add-more" onClick={() => handleAddComponent(category.id)}>
              {/* Specify button text based on if any children */}
              {category.children.length > 0 ? `Add More ${name}` : `Add ${name}`}
            </button>
        }
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <DataContext.Provider value={{data, setData}}>
        <div className="editor">
          {data.map(category =>
            // Get data to render
            getComponent(category)
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
