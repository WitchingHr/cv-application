import React, { useContext } from "react";
import { DataContext } from "../../App";

export default function ResumeContact() {
  // Get data
  const { data } = useContext(DataContext);
  const child = data[0].children[0];

  return (
    <div>
      <div className="category">Contact</div>
      <hr className="hr"></hr>
      <div className="type-wrapper">
        <div>
          <div className="type">Email</div>
          <div className="resume-data">{child.email}</div>
        </div>
        <div>
          <div className="type">Phone</div>
          <div className="resume-data">{child.phone}</div>
        </div>
      </div>
    </div>
  );
}
