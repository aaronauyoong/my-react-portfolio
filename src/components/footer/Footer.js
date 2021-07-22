import React from 'react';
import "../../assets/styles/footer.css";
import "../../assets/styles/custom-styles.css";

function Footer() {
    return (
        <section class="footer">
            <div>
                <div class="credits">
                    <p>Aaron Au Yoong Copyright (c) 2021-Present. All rights reserved. </p>
                </div>
                <div class="icon-links">
                    <a href="https://www.github.com/aaronauyoong"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/aaron-au-yoong-a69213142/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="mailto:auyoong.aaron@gmail.com"><i class="fas fa-envelope-square"></i></a>
                </div>
            </div>         
        </section>
    )
}

export default Footer;