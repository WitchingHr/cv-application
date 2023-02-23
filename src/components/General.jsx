import React from 'react';
import Input from './Input';

export default function General() {
  const category = 'general';
  return (
    <div className='gradient color-1'>
      <div className='general data-box'>
        <Input id={0} category={category} name="Name" />
        <Input id={0} category={category} name="Job Title" />
        <Input id={0} category={category} name="Summary" />
        <Input id={0} category={category} name="Email Address" />
        <Input id={0} category={category} name="Phone Number" />
      </div>
    </div>
  );
}
