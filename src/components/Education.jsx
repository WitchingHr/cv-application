import React from 'react';
import Input from './Input';

export default function Education({ id, handleDelete }) {
  // For handling delete
  const category = 'education';

  return (
    <div className='gradient color-2'>
      <div className='education data-box'>
        <div className='delete' onClick={() => handleDelete({ category, id})}>✕</div>
        <Input id={id} category={category} name="Degree or Certificate" />
        <Input id={id} category={category} name="School" />
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
