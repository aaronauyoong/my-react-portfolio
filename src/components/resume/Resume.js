import React from "react";
import "../../assets/styles/resume.css";
import "../../assets/styles/custom-styles.css";
import ResumeCartoon from "../../assets/images/undraw-resume.svg";
import MyResume from "../../assets/pdf/my-resume.pdf";

function Resume() {
	return (
		<section>
			<div class="resume">
				<div class="resume-header">
					<h2>My Resume</h2>
				</div>
				<div class="resume-img">
					<a href={MyResume}>
						<img src={ResumeCartoon} alt="Contact me cartoon" />
					</a>
				</div>
				<div class="resume-content row">
					<div class="resume-section col-lg-6">
						<h3>Browser Based Technologies</h3>
						<ul class="unstyled-bullets">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>Responsive Design</li>
							<li>Bootstrap</li>
							<li>Handlebars</li>
							<li>Local Storage, Session Storage, IndexedDB</li>
							<li>React.js</li>
						</ul>
					</div>
                    <div class="resume-section col-lg-6">
						<h3>Server-Side Development</h3>
						<ul class="unstyled-bullets">
							<li>Express</li>
							<li>User Authentication</li>
							<li>Sequelize</li>
							<li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
						</ul>
					</div>
                    <div class="resume-section col-lg-6">
						<h3>Quality, Performance and Accessibility</h3>
						<ul class="unstyled-bullets">
							<li>Unit Testing</li>
							<li>Google Lighthouse</li>
							<li>Webpack</li>
							<li>PWAs (Progressive Web Apps)</li>
							<li>Lazy Loading</li>
							<li>Service Workers</li>
							<li>Semantic HTML</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Agile Development</h3>
						<ul class="unstyled-bullets">
							<li>Kanban, Project Management</li>
							<li>Issues</li>
							<li>User Stories</li>
							<li>Sprints</li>
							<li>Standup</li>
							<li>Retros</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Computer Science applied to JavaScript</h3>
						<ul class="unstyled-bullets">
							<li>Design Patterns</li>
							<li>Data Structures</li>
							<li>Algorithms</li>
							<li>Big O Notation</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Deployment</h3>
						<ul class="unstyled-bullets">
							<li>Heroku</li>
							<li>MongoAtlas</li>
							<li>Netlify</li>
							<li>Git</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Locally Popular MVC Framework</h3>
						<ul class="unstyled-bullets">
							<li>C#/ASP.NET</li>
							<li>Python/Django</li>
							<li>Java/Spring</li>
							<li>PHP/Laravel</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Databases</h3>
						<ul class="unstyled-bullets">
							<li>MySQL</li>
							<li>MongoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
