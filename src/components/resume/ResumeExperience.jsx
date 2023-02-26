import React from "react";

export default function ResumeExperience({ id, data }) {
  // Get data for child
  const obj = data.filter((child) => child.id === id);

  return (
    <div>
      <div className="resume-data-invert resume-date">{obj[0].from}-{obj[0].to}</div>
      <div className="resume-data-invert">{obj[0].company}</div>
      <div className="type-invert">{obj[0].job}</div>
      <div className="resume-data-invert resume-description">{obj[0].responsibilities}</div>
    </div>
  );
}
