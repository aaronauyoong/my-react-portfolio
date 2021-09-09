import React from 'react';
import '../../assets/styles/resume.css';
import '../../assets/styles/custom-styles.css';
import ResumeCartoon from '../../assets/images/undraw-resume.svg';
import MyResume from '../../assets/pdf/my-resume.pdf';

function Resume() {
    return (
        <section className="resume">
            <div className="resume-header">
                <h2>
                    <span className="title-number">04.</span> Resume
                </h2>
            </div>
            <div className="resume-content">
                <div className="resume-img">
                        <img src={ResumeCartoon} alt="Contact me cartoon" />
                </div>
                <div className="resume-summary">
                    <div className="resume-section">
                        <h3>
                            Here are some of the technologies I've worked with
                            recently:
                        </h3>
                        <ul className="unstyled-bullets">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>
                                MERN Stack (MongoDB, Express.js, React.js,
                                Node.js)
                            </li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                            <li>GraphQL</li>
                            <li>MySQL</li>
                        </ul>
						<a href={MyResume} className="download-resume">Click here to download my resume!</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
