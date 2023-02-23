import React from 'react';
import Input from './Input';

export default function General() {
  const categoryId = 0;
  return (
    <div className='gradient color-1'>
      <div className='general data-box'>
        <Input id={0} categoryId={categoryId} name="Name" />
        <Input id={0} categoryId={categoryId} name="Job Title" />
        <Input id={0} categoryId={categoryId} name="Summary" />
        <Input id={0} categoryId={categoryId} name="Email Address" />
        <Input id={0} categoryId={categoryId} name="Phone Number" />
      </div>
    </div>
  );
}
