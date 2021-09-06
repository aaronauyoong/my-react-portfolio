import React from "react";
import "../../assets/styles/about.css";
import "../../assets/styles/custom-styles.css";
import MyPicture from "../../assets/images/my-picture.jpg"

function About() {
	return (
		<section>
			<div class="about-me-container">
				<div class="about-me-image">
					<img src={MyPicture} alt="Portrait of Aaron Au Yoong"/>
				</div>
				<div class="about-me">
					<h2><span class="title-number">01.</span> About Me</h2>
				</div>
				<div class="main-paragraph">
					<p>
						My name is Aaron Au Yoong, and I am starting my journey as a website
						and software developer. After various experiences over the past 2
						years, I have emerged as a fresh web developer after earning a
						certificate in full-stack web development from Monash University. I
						have developed technical skills and languages that cover front-end
						and back-end development, which include JavaScript, Node JS, React
						JS, MongoDB and SQL. 

						<br/>
						<br/>
						
						I am a keen learner and am looking to work with
						fellow developers to build impactful technologies. As a Master’s
						graduate with a year of full-time experience in the IT industry, I
						have developed soft skills that include critical thinking,
						communication and teamwork. 

						<br/>
						<br/>
						
						I aim to further understand people,
						relationships, interactions and the technological applications that
						can be used to enhance work-life satisfaction, efficiency and
						productivity through the combination of studying a Bachelor of
						Science (Psych), Masters of Business Information Technology and a
						Full Stack Web Development Diploma.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
