import React from "react";
import Input from "./Input";

export default function Experience({ id, handleDelete }) {
  // For handling delete
  const category = 'experience';

  return (
    <div className='gradient color-3'>
      <div className="experience data-box">
        <div className='delete' onClick={() => handleDelete({ category, id})}>✕</div>
        <Input id={id} category={category} name="Job Title" />
        <Input id={id} category={category} name="Company" />
        <Input id={id} category={category} name="Responsibilities" />
        <div className="dates-container">
          <span className="dates-input">
            <Input id={id} category={category} name="From" />
          </span>
          <span className="dates-input">
            <Input id={id} category={category} name="To" />
          </span>
        </div>
      </div>
    </div>
  );
}