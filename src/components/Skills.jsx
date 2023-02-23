import React from "react";
import Input from "./Input";

export default function Skills({ id, handleDelete }) {
  // For handling delete
  const category = 'skills';

  return (
    <div className='gradient color-4'>
      <div className="skills data-box">
        <div className='delete' onClick={() => handleDelete({ category, id})}>✕</div>
        <Input id={id} category={category} name="Skill" />
      </div>
    </div>
  );
}