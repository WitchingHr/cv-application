import React from "react";
import Input from "./Input";

export default function Experience({ id, handleDelete }) {
  // For handling delete
  const name = 'experience';

  return (
    <div className='gradient color-3'>
      <div className="experience data-box">
        <div className='delete' onClick={() => handleDelete({ name, id})}>✕</div>
        <Input name="Job Title" />
        <Input name="Company" />
        <Input name="Responsibilities" />
        <div className="dates-container">
          <span className="dates-input">
            <Input name="From" />
          </span>
          <span className="dates-input">
            <Input name="To" />
          </span>
        </div>
      </div>
    </div>
  );
}