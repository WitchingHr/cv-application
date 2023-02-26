import React from "react";
import Input from "./Input";

export default function Experience({ id, handleDelete }) {
  // For handling delete
  const categoryId = 2;

  return (
    <div className='gradient color-3'>
      <div className="experience data-box">
        <div className='delete' onClick={() => handleDelete({ categoryId, id})}>✕</div>
        <Input id={id} categoryId={categoryId} name="Job Title" />
        <Input id={id} categoryId={categoryId} name="Company" />
        <Input id={id} categoryId={categoryId} name="Responsibilities" />
        <div className="dates-container">
          <span className="dates-input">
            <Input id={id} categoryId={categoryId} name="From" />
          </span>
          <span className="dates-input">
            <Input id={id} categoryId={categoryId} name="To" />
          </span>
        </div>
      </div>
    </div>
  );
}