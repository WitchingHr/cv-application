import React, { useState, createContext, useEffect, useRef } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import References from './components/References';
import Resume from './components/Resume';
import About from './components/About';
import AboutMobile from './components/AboutMobile';
import Print from './components/Print';
import { useReactToPrint } from 'react-to-print';
import initial from './data';
import './App.css';

export const DataContext = createContext(null);

export default function App() {
  // Key ID's
  const [educationId, setEducationId] = useState(1);
  const [experienceId, setExperienceId] = useState(1);
  const [skillsId, setSkillsId] = useState(1);
  const [languagesId, setLanguagesId] = useState(1);
  const [referencesId, setReferencesId] = useState(1);

  const [data, setData] = useState(initial);
  
  // Layout state
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  function updateMedia() {
    setDesktop(window.innerWidth > 1000);
  };

  // Update state on resize
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  const [view, setView] = useState(false);
  function handleChangeView() {
    setView(!view);
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // Add component to passed category
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
          return {...category, children: [
            ...data[3].children,
            { 
              id: skillsId,
              skill: 'Skill'
            }
          ]}

        // Add Language
        } else if (id === 4) {
          return {...category, children: [
            ...data[4].children,
            { 
              id: languagesId,
              language: 'Language'
            }
          ]}

        // Add Reference
        } else if (id === 5) {
          return {...category, children: [
            ...data[5].children,
            {
              id: referencesId,
              name: 'Name',
              job: 'Job Title',
              company: 'Company',
              email: 'Email Address',
              phone: 'Phone Number'
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
    } else if (id === 4) {
      setLanguagesId(languagesId + 1);
    } else if (id === 5) {
      setReferencesId(referencesId + 1);
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
    } else if (category.id === 2) {
      name = 'Experience';
      length = 3;
    } else if (category.id === 3) {
      name = 'Skills';
      length = 5;
    } else if (category.id === 4) {
      name = 'Languages';
      length = 3;
    } else if (category.id === 5) {
      name = 'References';
      length = 2;
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
                  case 4:
                    return <Languages key={child.id} id={child.id} handleDelete={handleDelete} />
                  case 5:
                    return <References key={child.id} id={child.id} handleDelete={handleDelete} />
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

  // Mobile Layout
  if (isDesktop === false) {
    return (
      <>
        <div className="App">
          <div className='gradient color-2 view'>
            <button 
              onClick={handleChangeView}
              className="view-button"
            >
              {!view ? 'View Resume' : 'View Editor'}
            </button>
          </div>
          <DataContext.Provider value={{data, setData}}>
            {view === false ? (
              <div className="editor">
                {data.map(category =>
                  // Get data to render
                  getComponent(category)
                )}
              </div>
            ) : (
              <>
                <div className='wrapper'>
                  <div className="gradient color-1">
                    <div ref={componentRef}>
                      <Resume data={data} />
                    </div>
                  </div>
                </div>
                <Print handlePrint={handlePrint}/>
              </>
            )}
          </DataContext.Provider>
          <About />
          <AboutMobile />
        </div>
      </>
    );
  }

  // Desktop Layout
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
            <div ref={componentRef}>
              <Resume data={data} />
            </div>
          </div>
        </div>
      </DataContext.Provider>
      <About />
      <Print handlePrint={handlePrint}/>
    </div>
  );
}
