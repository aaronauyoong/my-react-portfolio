import React from 'react';
import "../../assets/styles/portfolio.css";
import "../../assets/styles/custom-styles.css";
import GamersHideout from "../../assets/images/gamers-hideout-screenshot.png";
import MarvelSuperhero from "../../assets/images/marvel-superhero-locator-screenshot.png";
import TechBlog from "../../assets/images/tech-blog-screenshot.png";
import NoteTaker from "../../assets/images/note-taker.png";
import WeatherApp from "../../assets/images/weatherforecastapp.png";
import EmployeeTracker from "../../assets/images/employee-tracker-demo.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Projects() {
    return (
        <section>
            <div className="main-container" id="projects">
                <div className="container-header">
                    <h2><span className="title-number">02.</span> Projects</h2>
                </div>

                {/* FEATURED PROJECT 1 */}
                <div className="project-card">
                        <div className="app-main">
                            <div>
                                <h6 className="featured">FEATURED</h6>
                            </div>
                            <h2 className="app-header">Gamer's Hideout <a className="github-link" href="https://github.com/aaronauyoong/TeamProject-Gamers-Hideout-ReviewSite"><i class="fab fa-github"></i></a></h2>
                                <a className="img-colorize" href="https://polar-castle-84176.herokuapp.com/">
                                    <img src={GamersHideout} className="app-image featured-image img-colorize" alt="Gamer's Hideout App" />
                                </a>
                        </div>
                        <div className="app-info">
                            <p className="app-description">A web application that allows users to look up games and their associated reviews, alongside writing their own reviews for their favourite games. Creating an account is necessary to leave reviews.</p>
                            <div className="language-list">
                                <p className="language">HTML</p>
                                <p className="language">CSS</p>
                                <p className="language">JavaScript</p>
                                <p className="language">Handlebars</p>
                                <p className="language">Node JS</p>
                                <p className="language">Sequelize</p>
                            </div>
                        </div>
                </div>
                {/* FEATURED PROJECT 2 */}
                <div className="project-card">
                    <div className="app-main">
                        <div>
                            <h6 className="featured">FEATURED</h6>
                        </div>
                        <h2 className="app-header">Marvel Superhero Locator <a className="github-link" href="https://github.com/aaronauyoong/TeamProject-Gamers-Hideout-ReviewSite"><i class="fab fa-github"></i></a></h2>
                            <a className="img-colorize" href="https://aaronauyoong.github.io/TeamProject-Marvel-Superhero-Locator/">
                                <img src={MarvelSuperhero} className="app-image featured-image" alt="Marvel Superhero Locator web app" />
                            </a>
                    </div>
                    <div className="app-info">
                        <p className="app-description">A client-side web application that uses information from two 3rd party APIs (Marvel and YouTube) to help users "locate" media appearances of their favourite Marvel characters.</p>
                        <div className="language-list">
                            <p className="language">HTML</p>
                            <p className="language">CSS</p>
                            <p className="language">JavaScript</p>
                            <p className="language">jQuery</p>
                            <p className="language">Local Storage</p>
                        </div>
                    </div>
                </div>

                {/* OTHER NOTABLE PROJECTS */}
                <div className="other-projects">
                    <h3>Other Notable Projects</h3>
                </div>
                <div className="projects-list">
                    {/* TECH BLOG */}
                    <div className="project-solo">
                        <div className="small-header">
                            <h4>Tech Blog <a className="github-link" href="https://github.com/aaronauyoong/tech-blog"><i class="fab fa-github"></i></a></h4>
                            <div className="app-image img-colorize">
                                <a href="https://aaronauyoong-techblog.herokuapp.com/">
                                    <img src={TechBlog} alt="Tech Blog App" />
                                </a>
                            </div>
                        </div>
                        <div className="small-desc">
                            <p>
                                A CMS-style blog site where developers can publish their blog posts and comments. Users are required to create an account before creating posts and comments.
                            </p>
                            <p className="language">HTML</p>
                            <p className="language">CSS</p>
                            <p className="language">JavaScript</p>
                            <p className="language">Handlebars</p>
                        </div>
                    </div>
                    {/* NOTE TAKER */}
                    <div className="project-solo">
                        <div className="small-header">
                            <h4>Note Taker <a className="github-link" href="https://github.com/aaronauyoong/note-taker"><i class="fab fa-github"></i></a></h4>
                            <div className="app-image img-colorize">
                                <a href="https://note-taker-aaronauyoong.herokuapp.com/">
                                    <img src={NoteTaker} alt="Note Taker App" />
                                </a>
                            </div>
                        </div>
                        <div className="small-desc">
                            <p>
                                Note Taker is an application that can be used to write and save notes. This application will use an Express.js back-end and will save and retrieve note data from a JSON file.                            </p>
                            <p className="language">HTML</p>
                            <p className="language">CSS</p>
                            <p className="language">JavaScript</p>
                            <p className="language">Handlebars</p>
                        </div>
                    </div>
                    {/* WEATHER DASHBOARD */}
                    <div className="project-solo">
                        <div className="small-header">
                            <h4>Weather Dashboard <a className="github-link" href="https://github.com/aaronauyoong/weather-dashboard"><i class="fab fa-github"></i></a></h4>
                            <div className="app-image img-colorize">
                                <a href="https://aaronauyoong-techblog.herokuapp.com/">
                                    <img src={WeatherApp} alt="Weather Dashboard App" />
                                </a>
                            </div>
                        </div>
                        <div className="small-desc">
                            <p>
                                This is a weather dashboard that fetches data from a third-party API (OpenWeather) that will run in the browser and feature dynamically updated HTML and CSS.</p>
                            <p className="language">HTML</p>
                            <p className="language">CSS</p>
                            <p className="language">JavaScript</p>
                        </div>
                    </div>
                    {/* EMPLOYEE TRACKER */}
                    <div className="project-solo">
                        <div className="small-header">
                            <h4>Employee Tracker <a className="github-link" href="https://github.com/aaronauyoong/employee-tracker"><i class="fab fa-github"></i></a></h4>
                            <div className="app-image img-colorize">
                                <a href="https://www.youtube.com/watch?v=vUprIIN-5Gs&ab_channel=AaronAuYoong">
                                    <img src={EmployeeTracker} alt="Employee Tracker App Demo" />
                                </a>
                            </div>
                        </div>
                        <div className="small-desc">
                            <p>
                                The "Employee Tracker" is a CLI application that allows users to view and manage the departments, roles, and employees in their company, so they can organise and plan their business.                            </p>
                            <p className="language">JavaScript</p>
                            <p className="language">Node JS</p>
                            <p className="language">MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;