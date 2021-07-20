import React from "react";
import "../../assets/styles/custom-styles.css";
import HomepageWebDev from "../../assets/images/homepage-webdev.svg";
// import Typewriter from "typewriter-effect";

function Home() {
	return (
		<section class="landing-page">
			<div>
				<div class="hello-world typewriter">
					<h2> &lt; Hello World! /&gt; </h2>
				</div>
				<div class="home-myself">
					<h1 class="myself-text col-lg-4">
						I'm Aaron Au Yoong , a&nbsp;
						<span>Web Developer</span>.
					</h1>
					<div class="home-image col-lg-8">
						<img
							src={HomepageWebDev}
							alt="This is a Web Dev cartoon from unDraw"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
