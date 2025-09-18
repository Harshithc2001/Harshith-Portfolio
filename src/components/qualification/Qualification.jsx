import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggeleState] = useState(1);
  
  const toggleTab = (index) => {
      setToggeleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        
        <div className="qualification__container">
          <div className="qualification__tabs">
            <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" 
              : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
            </div>

            <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" 
              : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
              <i className="uil uil-graduation-cap qualification__icon"></i> Education
            </div>
          </div>
          <div className="qualification__sections">
            <div className={toggleState === 1 ? "qualification__content qualification__content-active" 
              : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Associate Software Engineer</h3>
                  <span className="qualification__subtitle">Tech Mahindra - Bengaluru</span>
                  <div className="qualification__calander">
                    <i className="uil uil-calendar-alt"></i> 08/2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Intern</h3>
                  <span className="qualification__subtitle">Re-Batt Energy Solutions Pvt Ltd.</span>
                  <div className="qualification__calander">
                    <i className="uil uil-calendar-alt"></i> 06/2022 - 09/2022
                  </div>
                </div>
              </div>
            </div>

            <div className={toggleState === 2 ? "qualification__content qualification__content-active" 
              : "qualification__content"}>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Bachelor of Engineering</h3>
                    <span className="qualification__subtitle">Nagarjuna College of Engineering and Technology</span>
                    <div className="qualification__calander">
                      <i className="uil uil-calendar-alt"></i> 2019 - 2023
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Pre-University College</h3>
                    <span className="qualification__subtitle">Sahyadri PU College</span>
                    <div className="qualification__calander">
                      <i className="uil uil-calendar-alt"></i> 2017 - 2019
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Qualification