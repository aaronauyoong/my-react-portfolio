import React from 'react';
import '../../assets/styles/projects.css';
import '../../assets/styles/custom-styles.css';

import GamersHideout from '../../assets/images/gamers-hideout-screenshot.png';
import MarvelSuperhero from '../../assets/images/marvel-superhero-locator-screenshot.png';

const FeaturedProjects = () => {
    return (
        <div>
            {/* FEATURED PROJECT 1 */}
            <section className="featured-project">
                <div className="app-main">
                    <div>
                        <h6 className="featured">FEATURED</h6>
                    </div>
                    <h2 className="app-header">
                        Gamer's Hideout{' '}
                        <a
                            className="github-link"
                            href="https://github.com/aaronauyoong/TeamProject-Gamers-Hideout-ReviewSite"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                    </h2>
                    <a
                        className="img-colorize"
                        href="https://polar-castle-84176.herokuapp.com/"
                    >
                        <img
                            src={GamersHideout}
                            className="app-image featured-image img-colorize"
                            alt="Gamer's Hideout App"
                        />
                    </a>
                </div>
                <div className="app-info">
                    <p className="app-description">
                        A web application that allows users to look up games and
                        their associated reviews, alongside writing their own
                        reviews for their favourite games. Creating an account
                        is necessary to leave reviews.
                    </p>
                    <div className="language-list">
                        <p className="language">HTML</p>
                        <p className="language">CSS</p>
                        <p className="language">JavaScript</p>
                        <p className="language">Handlebars</p>
                        <p className="language">Node JS</p>
                        <p className="language">Sequelize</p>
                    </div>
                </div>
            </section>
            {/* FEATURED PROJECT 2 */}
            <section className="featured-project">
                <div className="app-main">
                    <div>
                        <h6 className="featured">FEATURED</h6>
                    </div>
                    <h2 className="app-header">
                        Marvel Superhero Locator{' '}
                        <a
                            className="github-link"
                            href="https://github.com/aaronauyoong/TeamProject-Gamers-Hideout-ReviewSite"
                        >
                            <i class="fab fa-github"></i>
                        </a>
                    </h2>
                    <a
                        className="img-colorize"
                        href="https://aaronauyoong.github.io/TeamProject-Marvel-Superhero-Locator/"
                    >
                        <img
                            src={MarvelSuperhero}
                            className="app-image featured-image"
                            alt="Marvel Superhero Locator web app"
                        />
                    </a>
                </div>
                <div className="app-info">
                    <p className="app-description">
                        A client-side web application that uses information from
                        two 3rd party APIs (Marvel and YouTube) to help users
                        "locate" media appearances of their favourite Marvel
                        characters.
                    </p>
                    <div className="language-list">
                        <p className="language">HTML</p>
                        <p className="language">CSS</p>
                        <p className="language">JavaScript</p>
                        <p className="language">jQuery</p>
                        <p className="language">Local Storage</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedProjects;
