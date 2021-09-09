import React from 'react';
import '../../assets/styles/projects.css';
import '../../assets/styles/custom-styles.css';

import TechBlog from '../../assets/images/tech-blog-screenshot.png';
import NoteTaker from '../../assets/images/note-taker.png';
import WeatherApp from '../../assets/images/weatherforecastapp.png';
import EmployeeTracker from '../../assets/images/employee-tracker-demo.png';

const ProjectCards = () => {
    return (
        <div>
            {/* OTHER NOTABLE PROJECTS */}
            <div className="other-projects">
                <h3>Other Notable Projects</h3>
            </div>
            <section className="projects-list">
                {/* TECH BLOG */}
                <div className="project-card">
                    <div className="small-header">
                        <h4>
                            Tech Blog{' '}
                            <a
                                className="github-link"
                                href="https://github.com/aaronauyoong/tech-blog"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </h4>
                        <div className="app-image img-colorize">
                            <a href="https://aaronauyoong-techblog.herokuapp.com/">
                                <img src={TechBlog} alt="Tech Blog App" />
                            </a>
                        </div>
                    </div>
                    <div className="small-desc">
                        <p>
                            A CMS-style blog site where developers can publish
                            their blog posts and comments. Users are required to
                            create an account before creating posts and
                            comments.
                        </p>
                        <p className="language">HTML</p>
                        <p className="language">CSS</p>
                        <p className="language">JavaScript</p>
                        <p className="language">Handlebars</p>
                    </div>
                </div>
                {/* NOTE TAKER */}
                <div className="project-card">
                    <div className="small-header">
                        <h4>
                            Note Taker{' '}
                            <a
                                className="github-link"
                                href="https://github.com/aaronauyoong/note-taker"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </h4>
                        <div className="app-image img-colorize">
                            <a href="https://note-taker-aaronauyoong.herokuapp.com/">
                                <img src={NoteTaker} alt="Note Taker App" />
                            </a>
                        </div>
                    </div>
                    <div className="small-desc">
                        <p>
                            Note Taker is an application that can be used to
                            write and save notes. This application will use an
                            Express.js back-end and will save and retrieve note
                            data from a JSON file.{' '}
                        </p>
                        <p className="language">HTML</p>
                        <p className="language">CSS</p>
                        <p className="language">JavaScript</p>
                        <p className="language">Handlebars</p>
                    </div>
                </div>
                {/* WEATHER DASHBOARD */}
                <div className="project-card">
                    <div className="small-header">
                        <h4>
                            Weather Dashboard{' '}
                            <a
                                className="github-link"
                                href="https://github.com/aaronauyoong/weather-dashboard"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </h4>
                        <div className="app-image img-colorize">
                            <a href="https://aaronauyoong-techblog.herokuapp.com/">
                                <img
                                    src={WeatherApp}
                                    alt="Weather Dashboard App"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="small-desc">
                        <p>
                            This is a weather dashboard that fetches data from a
                            third-party API (OpenWeather) that will run in the
                            browser and feature dynamically updated HTML and
                            CSS.
                        </p>
                        <p className="language">HTML</p>
                        <p className="language">CSS</p>
                        <p className="language">JavaScript</p>
                    </div>
                </div>
                {/* EMPLOYEE TRACKER */}
                <div className="project-card">
                    <div className="small-header">
                        <h4>
                            Employee Tracker{' '}
                            <a
                                className="github-link"
                                href="https://github.com/aaronauyoong/employee-tracker"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </h4>
                        <div className="app-image img-colorize">
                            <a href="https://www.youtube.com/watch?v=vUprIIN-5Gs&ab_channel=AaronAuYoong">
                                <img
                                    src={EmployeeTracker}
                                    alt="Employee Tracker App Demo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="small-desc">
                        <p>
                            The "Employee Tracker" is a CLI application that
                            allows users to view and manage the departments,
                            roles, and employees in their company, so they can
                            organise and plan their business.{' '}
                        </p>
                        <p className="language">JavaScript</p>
                        <p className="language">Node JS</p>
                        <p className="language">MySQL</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectCards;
