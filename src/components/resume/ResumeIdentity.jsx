import React, { useContext } from "react";
import { DataContext } from "../../App";

export default function ResumeIdentity() {
  // Get data
  const { data } = useContext(DataContext);
  const child = data[0].children[0];

  return (
    <div className="identity resume-right">
      <div className="resume-name">{child.name}</div>
      <div className="type-invert">{child.job}</div>
      <div className="resume-data-invert resume-description">{child.summary}</div>
    </div>
  );
}
