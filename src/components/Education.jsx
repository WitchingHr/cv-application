import React from 'react';
import Input from './Input';

export default function Education() {
  return (
    <div className='gradient color-2'>
      <div className='education data-box'>
        <Input name="Degree" />
        <Input name="School" />
        <Input name="Dates" />
      </div>
    </div>
  );
}
