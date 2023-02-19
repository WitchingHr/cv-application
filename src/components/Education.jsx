import React from 'react';
import Input from './Input';

export default function Education() {
  return (
    <div className='gradient color-2'>
      <div className='education data-box'>
        <Input name="Degree" />
        <Input name="School" />
        <div className="dates-container">
          <span className="dates-input">
            <Input name="From" max="4" />
          </span>
          <span className="dates-input">
            <Input name="To" max="4" />
          </span>
        </div>
      </div>
    </div>
  );
}
