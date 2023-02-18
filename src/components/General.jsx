import React from 'react';
import Input from './Input';

export default function General() {
  return (
    <div className='general'>
      <Input name="Name" />
      <Input name="Email address" />
      <Input name="Phone number" />
    </div>
  );
}
