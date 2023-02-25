import React from "react";
import Input from "./Input";

export default function References({ id, handleDelete }) {
  // For handling delete
  const categoryId = 5;

  return (
    <div className='gradient color-2'>
      <div className="experience data-box"> {/* Change this class */}
        <div className='delete' onClick={() => handleDelete({ categoryId, id})}>✕</div>
        <Input id={id} categoryId={categoryId} name="Name" />
        <Input id={id} categoryId={categoryId} name="Job Title" />
        <Input id={id} categoryId={categoryId} name="Company" />
        <Input id={id} categoryId={categoryId} name="Email Address" />
        <Input id={id} categoryId={categoryId} name="Phone Number" />
      </div>
    </div>
  );
}