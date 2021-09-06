import React from 'react';
import '../../assets/styles/custom-styles.css';
// import HomepageWebDev from '../../assets/images/homepage-webdev.svg';
// import Typewriter from "typewriter-effect";

function Home() {
    return (
        <section class="landing-page">
            <div>
                {/* <div class="home-image">
                    <img
                        src={HomepageWebDev}
                        alt="This is a Web Dev cartoon from unDraw"
                    ></img>
                </div> */}
                <div class="hello-world">
                    <div class="typewriter">
                        <h4> &lt; Hello World! /&gt;</h4>
                    </div>
                </div>
                <div class="home-myself">
                    <p class="my-name">My name is</p>
                    <h2 class="myself-text">Aaron Au Yoong.</h2>
                    <h3 class="create-text">I create things for the web.</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;
