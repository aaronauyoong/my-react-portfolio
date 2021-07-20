import React from "react";
import "../../assets/styles/custom-styles.css";
import HomepageWebDev from "../../assets/images/homepage-webdev.svg";
// import Typewriter from "typewriter-effect";

function Home() {
	return (
		<section class="landing-page">
			<div class="hello-world typewriter">
				<h3> &lt; Hello World! /&gt; </h3>
			</div>
			<div class="home-myself col-lg-7">
				<h1>
					My name is Aaron Au Yoong, and I am a Web Developer.
				</h1>

				{/* <div>
					<img
						src={HomepageWebDev}
						alt="This is a Web Dev cartoon from unDraw"
					></img>
				</div> */}
			</div>
		</section>
	);
}

export default Home;
