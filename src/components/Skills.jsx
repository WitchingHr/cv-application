import React from "react";
import Input from "./Input";

export default function Skills({ id, handleDelete }) {
  // For handling delete
  const categoryId = 3;

  return (
    <div className='gradient color-4'>
      <div className="skills data-box">
        <div className='delete' onClick={() => handleDelete({ categoryId, id})}>✕</div>
        <Input id={id} categoryId={categoryId} name="Skill" />
      </div>
    </div>
  );
}