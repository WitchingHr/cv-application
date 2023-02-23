import React from "react";

export default function ResumeEducation({ id, data }) {
  const obj = data.filter((child) => child.id === id);
  return (
    <div>
      <div className="resume-data resume-date">{obj[0].from}-{obj[0].to}</div>
      <div className="type">{obj[0].degree}</div>
      <div className="resume-data">{obj[0].school}</div>
    </div>
  );
}