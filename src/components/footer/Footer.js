import React from 'react';
import "../../assets/styles/footer.css";
import "../../assets/styles/custom-styles.css";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="credits">
                    <p>Aaron Au Yoong Copyright (c) 2021-Present. All rights reserved. </p>
                </div>
                <div className="icon-links">
                    <a href="https://www.github.com/aaronauyoong"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/aaron-au-yoong-a69213142/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="mailto:auyoong.aaron@gmail.com"><i class="fas fa-envelope-square"></i></a>
                </div>
            </div>         
        </footer>
    )
}

export default Footer;