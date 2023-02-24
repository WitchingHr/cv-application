import React from "react";
import ResumeIdentity from "./ResumeIdentity";
import avatar from '../assets/avatar.png';
import ResumeContact from "./ResumeContact";
import ResumeEducation from "./ResumeEducation";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeLanguages from "./ResumeLanguages"

export default function Resume({ data }) {
  return (
    <div className="resume">
      <img alt="Headshot" className="head-shot" src={avatar}></img>

      <div className="left-flex">
        <ResumeContact />
        <div>
          <div className="category">Education</div>
          <hr className="hr"></hr>
          <div className="type-wrapper">
            {data[1].children.map((child) =>
              <ResumeEducation key={child.id} id={child.id} data={data[1].children} />
            )}
          </div>
        </div>
        <div>
          <div className="category">Expertise</div>
          <hr className="hr"></hr>
          <ul className="type-wrapper skills-ul">
            {data[3].children.map((child) =>
              <ResumeSkills key={child.id} id={child.id} data={data[3].children} />
            )}
          </ul>
        </div>
      </div>

      <div className="languages">
        <div className="category">Languages</div>
        <hr className="hr"></hr>
          <ul className="languages-ul">
            {data[4].children.map((child) =>
              <ResumeLanguages key={child.id} id={child.id} data={data[4].children} />
            )}
          </ul>
      </div>

      <ResumeIdentity />

      <div className="right-flex resume-right">
        <div>
          <div className="category-invert">Experience</div>
          <hr className="hr-invert"></hr>
          <div className="type-wrapper">
            {data[2].children.map((child) =>
              <ResumeExperience key={child.id} id={child.id} data={data[2].children} />
            )}

          </div>
        </div>
      </div>

      <div className="references resume-right">
        <div className="category-invert">References</div>
        <hr className="hr-invert"></hr>
        <div className="ref-wrapper">

          <div>
            <div className="type-invert ref">This Guy</div>
            <div>
              <span className="resume-data-invert ref">Lead Developer</span>
              <span className="resume-data-invert ref">, </span>
              <span className="resume-data-invert ref">That Company</span>
            </div>
            <div>
              <span className="type-invert ref">Email: </span>
              <span className="resume-data-invert ref">thisguy@example.com</span>
            </div>
            <div>
              <span className="type-invert ref">Phone: </span>
              <span className="resume-data-invert ref">6039998888</span>
            </div>
          </div>

          <div>
            <div className="type-invert ref">This Guy</div>
            <div>
              <span className="resume-data-invert ref">Lead Developer</span>
              <span className="resume-data-invert ref">, </span>
              <span className="resume-data-invert ref">That Company</span>
            </div>
            <div>
              <span className="type-invert ref">Email: </span>
              <span className="resume-data-invert ref">thisguy@example.com</span>
            </div>
            <div>
              <span className="type-invert ref">Phone: </span>
              <span className="resume-data-invert ref">6039998888</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
