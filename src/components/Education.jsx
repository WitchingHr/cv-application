import React from 'react';
import Input from './Input';

export default function Education({ id, handleDelete }) {
  // For handling delete
  const categoryId = 1;

  return (
    <div className='gradient color-2'>
      <div className='education data-box'>
        <div className='delete' onClick={() => handleDelete({ categoryId, id})}>✕</div>
        <Input id={id} categoryId={categoryId} name="Degree or Certification" />
        <Input id={id} categoryId={categoryId} name="School" />
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
