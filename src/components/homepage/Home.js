import React from "react";
import "../../assets/styles/custom-styles.css";
import HomepageWebDev from "../../assets/images/homepage-webdev.svg";
// import Typewriter from "typewriter-effect";

function Home() {
	return (
		<section class="landing-page">
			<div>
				<div class="hello-world">
					<h2> &lt; Hello World! /&gt; </h2>
				</div>
				<div class="home-myself">
					<h2 class="myself-text">
						I'm Aaron Au Yoong,
						<div class="typewriter">
							<h2 class="my-job"> &gt;Web Developer.</h2>
						</div>
						
					</h2>
					<div class="home-image">
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
