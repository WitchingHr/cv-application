import React, { useState } from "react";

export default function AboutMobile() {
  const [state, setState] = useState(true);

  function handleAboutButton() {
    setState(!state);
  }

  return (
    <div className='gradient color-2 about-mobile'>
      <button 
        onClick={handleAboutButton}
        className="view-button"
      >
        {!state ? 'About' : 'Collapse'}
      </button>
      {state && (
          <div className="about-opened">
            <h2>CV Application</h2>
            <p>Edit the fields in the Editor View and view the results on the Resume View.</p>
            <p>Add extra fields to categories by clicking the "Add More" buttons.</p>
            <p>Remove fields by clicking the "✕" at the top right of the field's box.</p>
            <p>Click the avatar icon to add your picture.</p>
            <br></br>
            <p>Created by</p>
            <p><a href="https://github.com/WitchingHr">WitchingHr © 2023</a></p>
            <p><a href="https://github.com/WitchingHr/cv-application">GitHub Repo</a></p>
          </div>
      )}
    </div>
  );
}