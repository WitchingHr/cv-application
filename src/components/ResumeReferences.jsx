import React from "react";

export default function ResumeReferences({ id, data }) {
  const obj = data.filter((child) => child.id === id);

  return (
    <div>
      <div className="type-invert ref">{obj[0].name}</div>
      <div className="resume-data-invert ref">{obj[0].job}</div>
      <div className="resume-data-invert ref">{obj[0].company}</div>
      <div>
        <span className="type-invert ref">Email: </span>
        <span className="resume-data-invert ref">{obj[0].email}</span>
      </div>
      <div>
        <span className="type-invert ref">Phone: </span>
        <span className="resume-data-invert ref">{obj[0].phone}</span>
      </div>
    </div>
  );
}