import React from 'react';
import '../../assets/styles/custom-styles.css';
import HomepageWebDev from '../../assets/images/web-developer.svg';

function Home() {
    return (
        <section className="landing-page">
            <div className="hero-container">
                <div className="home-content">
                    <div className="hello-world">
                        <div className="typewriter">
                            <h4> &lt; Hello World! /&gt;</h4>
                        </div>
                    </div>
                    <div className="home-myself">
                        <p className="my-name">My name is</p>
                        <h2 className="myself-text">Aaron Au Yoong.</h2>
                        <h3 className="create-text">
                            I create things for the web.
                        </h3>
                    </div>
                    <div className="home-summary">
                        <p className="summary-text">
                            I am a full-stack web developer specialising in
                            building (and occasionally designing) web
                            applications. I am currently looking for
                            opportunities.
                        </p>
                    </div>
                </div>
                <div class="home-image">
                    <img
                        src={HomepageWebDev}
                        alt="This is a Web Dev cartoon from unDraw"
                    ></img>
                </div>
            </div>
        </section>
    );
}

export default Home;
