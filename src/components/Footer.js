import React from 'react';
import "../assets/styles/footer.css";
import "../assets/styles/custom-styles.css";

function Footer() {
    return (
        <section class="footer">
            <div>
                <div class="footer-header">
                    <h2>LET'S CONNECT!</h2>    
                </div>
                <div class="footer-content">
                    <p>Keen on working together? Have any questions? Feel free to send an email, and I will respond as soon as I can.</p>
                    <a href="mailto:auyoong.aaron@gmail.com" class="contact-btn">E M A I L</a>
                </div>
                <div class="credits">
                    <p>Aaron Au Yoong Copyright (c) 2021-Present. All rights reserved. </p>
                </div>
            </div>         
        </section>
    )
}

export default Footer;