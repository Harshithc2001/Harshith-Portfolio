import React, { useState } from 'react';
import "./certifications.css";

const Certifications = () => {
    const [toggleState, setToggeleState] = useState(0);

    const toggleTab = (index) => {
        setToggeleState(index);
    };
  return (
    <section className="certifications section" id="certifications">
        <h2 className="section__title">Certifications</h2>
        <span className="section__subtitle">My certificates</span>

        <div className="certifications__container container grip">
            <div className="certifications__content">
                <i className="uil uil-award-alt certifications__icon"></i>
                <h3 className="certifications__title">Udemy <br /> Certifications
                </h3>
                <h4 className="certifications__modal-description">Completed 10+ professional development courses on Udemy across various
                        technical and soft-skill areas.
                    </h4>
                <span className="certifications__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right certifications__button-icon"></i></span>
            </div>

            <div className={toggleState === 1 ? "certifications__modal active-model" : "certifications__modal"}>
                <div className="certifications__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times Certifications__modal-close"></i>
                        <h3 className="certifications__modal-title">Udemy Certifications
                        </h3>
                    
                    <ul className="certifications__modal-certifications grid">
                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-80a306bb-e10d-4aef-9ac9-1ab04eb927aa" className="certifications__modal-info">Practical Next.js & React -Build 
                                a real WebApp with Next.js</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-b945987f-4429-43ff-b25e-ec12ac6435be" className="certifications__modal-info">Hands-On React. Build advanced React JS Frontend with expert</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-63fb6a91-1066-44d1-84e8-0d22e930fef1" className="certifications__modal-info">JavaScript for Beginners -The Complete introduction to JS</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-b79bb9c5-5072-4aa5-b13e-b63b8eb56425" className="certifications__modal-info">Complete Web Design: HTML, CSS, Javascript, jQuery, Vue, Git</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-af96f95b-c691-4d7d-b17c-e221f8e332db" className="certifications__modal-info">Data Structures A-Z: Data Structures + Algorithms Bootcamp</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-821d45bc-cba6-4b06-b8ac-cb71c64fea86" className="certifications__modal-info">The Python Bible™ | Everything You Need to Program in Python</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-b7b4d831-f728-41ab-a307-37c6b3c00c7c" className="certifications__modal-info">A Practical Introduction to Cloud Computing</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-7ee3d828-717d-49a2-ab59-c132bef48d3b" className="certifications__modal-info">Bash Shell Scripting: Crash Course For Beginners</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-545b282c-723a-4798-97f1-fe4ec17b93c7" className="certifications__modal-info">Agile Fundamentals: Including Scrum & Kanban</a>
                        </li>

                        <li className="certifications__modal-certification">
                            <i className="uil uil-check-circle certifications__modal-icon"></i>
                            <a href="http://ude.my/UC-385e76e2-9d4b-47c0-b467-6a888ab3e6f1" className="certifications__modal-info">Learn Linux in 5 Days and Level Up Your Career</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certifications