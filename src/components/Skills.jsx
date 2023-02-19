import React from "react";
import Input from "./Input";

export default function Skills() {
  return (
    <div className='gradient color-4'>
      <div className="skills data-box">
        <Input name="Skill" />
        <Input name="Description" />
      </div>
    </div>
  );
}