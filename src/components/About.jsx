import React, { useState } from "react";

export default function About() {
  // True === open
  const [state, setState] = useState(true);

  function handleAboutButton() {
    setState(!state);
  }

  return (
    <div className="about">
      {state === false ? (
        <button
          className="about-button"
          onClick={handleAboutButton}
        >?</button>
      ) : (
        <div className='gradient color-3'>
          <div className="about-opened">
            <button
              className="about-button"
              onClick={handleAboutButton}
            >✕</button>
            <h2>CV Application</h2>
            <p>Edit the fields on the left and watch it update the resume as you type.</p>
            <p>Add extra fields to categories by clicking the "Add More" buttons.</p>
            <p>Remove fields by clicking the "✕" at the top right of the field's box.</p>
            <p>Click the avatar icon to add your picture.</p>
            <p>Click the Print button when finished to print your resume!</p>
            <br></br>
            <p>Created by</p>
            <p><a href="https://github.com/WitchingHr">WitchingHr © 2023</a></p>
            <p><a href="https://github.com/WitchingHr/cv-application">GitHub Repo</a></p>
          </div>
        </div>
      )}
    </div>
  );
}
