import React from "react";

export default function ResumeSkills({ id, data }) {
  const obj = data.filter((child) => child.id === id);
  return (
    <li className="resume-data">{obj[0].skill}</li>
  );
}