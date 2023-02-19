import React from "react";
import Input from "./Input";

export default function Skills({ id, handleDelete }) {
  // For handling delete
  const name = 'skills';

  return (
    <div className='gradient color-4'>
      <div className="skills data-box">
        <div className='delete' onClick={() => handleDelete({ name, id})}>✕</div>
        <Input name="Skill" />
        <Input name="Description" />
      </div>
    </div>
  );
}