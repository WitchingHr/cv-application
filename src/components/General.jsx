import React from 'react';
import Input from './Input';

export default function General() {
  return (
    <div className='gradient color-1'>
      <div className='general data-box'>
        <Input name="Name" />
        <Input name="Email address" />
        <Input name="Phone number" />
      </div>
    </div>
  );
}
