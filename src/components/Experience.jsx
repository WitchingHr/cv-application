import React from "react";
import Input from "./Input";

export default function Experience() {
  return (
    <div className='gradient color-3'>
      <div className="experience data-box">
        <Input name="Job Title" />
        <Input name="Company" />
        <Input name="Responsibilities" />
        <Input name="Dates" />
      </div>
    </div>
  );
}