import React, { useState } from "react";
import "../../assets/styles/contact.css";
import "../../assets/styles/custom-styles.css";
import ContactImg from "../../assets/images/contact-me.svg";

function Contact() {
	return (
		<section>
            <div class="contact">
                <div class="contact-header">
                    <h2>LET'S CONNECT!</h2>    
                </div>
                <div class="contact-img">
                    <img src={ContactImg} alt="Contact me cartoon" />
                </div>
                <div class="contact-content">
                    <p>Keen on working together? Have any questions? Feel free to send an email, and I will respond as soon as I can.</p>
                    <a href="mailto:auyoong.aaron@gmail.com" class="contact-btn">E M A I L</a>
                </div>
            </div>         
		</section>
	);
}

export default Contact;
