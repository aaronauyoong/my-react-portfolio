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
						<h3>Here are some technologies I've worked with recently:</h3>
						<ul class="unstyled-bullets">
							<li>JavaScript (ES6+)</li>
							<li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
							<li>Bootstrap</li>
							<li>Handlebars</li>
							<li>MySQL</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Trained in Agile Development:</h3>
						<ul class="unstyled-bullets">
							<li>Kanban, Project Management</li>
							<li>Issues</li>
							<li>User Stories</li>
							<li>Sprints</li>
							<li>Standup</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Familiar With Deployment Platforms:</h3>
						<ul class="unstyled-bullets">
							<li>Heroku</li>
							<li>MongoAtlas</li>
							<li>Netlify</li>
							<li>Git</li>
						</ul>
					</div>
					<div class="resume-section col-lg-6">
						<h3>Familiar With Popular MVC Frameworks:</h3>
						<ul class="unstyled-bullets">
							<li>Django</li>
							<li>Laravel</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
