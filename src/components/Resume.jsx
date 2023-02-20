import React from "react";

export default function Resume() {
  return (
    <div className="resume">

      <div className="resume-left">

          <div>
            <div className="category">Contact</div>
            <hr className="hr"></hr>
            <div className="type-wrapper">
              <div>
                <div className="type">Email</div>
                <div className="resume-data">matt1494@gmail.com</div>
              </div>
              <div>
                <div className="type">Phone</div>
                <div className="resume-data">6039133102</div>
              </div>
            </div>
          </div>

          <div>
            <div className="category">Education</div>
            <hr className="hr"></hr>
            <div className="type-wrapper">
              <div>
                <div>
                  <span className="resume-data resume-date">2022</span>
                  <span className="resume-data resume-date">-</span>
                  <span className="resume-data resume-date">2023</span>
                </div>
                <div className="type">Degree</div>
                <div className="resume-data">The Odin Project</div>
              </div>
            </div>
          </div>

          <div>
            <div className="category">Expertise</div>
            <hr className="hr"></hr>
            <ul className="type-wrapper skills-ul">
              <li className="resume-data">JavaScript</li>
              <li className="resume-data">React</li>
              <li className="resume-data">UI Design</li>
              <li className="resume-data">HTML/CSS</li>
              <li className="resume-data">Functional Programming</li>
            </ul>
          </div>

          <div>
            <div className="category">Languages</div>
            <hr className="hr"></hr>
              <ul className="languages-ul">
                <li className="resume-data">English</li>
                <li className="resume-data">Spanish</li>
              </ul>
          </div>

      </div>

      <div className="resume-right">
        <div>
          <div className="resume-name">Matt Thomas</div>
          <div className="type-invert">Web Developer</div>
          <div className="resume-data-invert resume-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore.</div>
        </div>

        <div>
          <div className="category-invert">Experience</div>
          <hr className="hr-invert"></hr>
          <div className="type-wrapper">

            <div>
              <div>
                <span className="resume-data-invert resume-date">2022</span>
                <span className="resume-data-invert resume-date">-</span>
                <span className="resume-data-invert resume-date">2023</span>
              </div>
              <div className="resume-data-invert">That Company</div>
              <div className="type-invert">Junior Software Engineer</div>
              <div className="resume-data-invert resume-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore consectetur aspernatur expedita possimus hic sapiente a magnam nemo.</div>
            </div>

            <div>
              <div>
                <span className="resume-data-invert resume-date">2022</span>
                <span className="resume-data-invert resume-date">-</span>
                <span className="resume-data-invert resume-date">2023</span>
              </div>
              <div className="resume-data-invert">That Company</div>
              <div className="type-invert">Junior Software Engineer</div>
              <div className="resume-data-invert resume-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos officiis dolores est? Beatae corrupti maiores magni vero quia, odit labore consectetur aspernatur expedita possimus hic sapiente a magnam nemo.</div>
            </div>

          </div>
        </div>

        <div className="references">
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
    </div>
  );
}
