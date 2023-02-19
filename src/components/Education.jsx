import React from 'react';
import Input from './Input';

export default function Education({ id, handleDelete }) {
  // For handling delete
  const name = 'education';

  return (
    <div className='gradient color-2'>
      <div className='education data-box'>
        <div className='delete' onClick={() => handleDelete({ name, id})}>✕</div>
        <Input name="Degree or Certificate" />
        <Input name="School" />
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
