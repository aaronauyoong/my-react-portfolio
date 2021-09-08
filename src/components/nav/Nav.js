import React, { useState } from 'react';
import '../../assets/styles/nav.css';
import '../../assets/styles/custom-styles.css';
import Logo from '../../assets/images/website-logo.png';

function Nav() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <header>
            <nav class="nav-bar">
                <div class="square logo">
                    <a href="/">
                        <img
                            src={Logo}
                            alt="This is the website logo."
                            class="lav-border"
                        />
                    </a>
                </div>
                <a href="/about" class="nav-btn hover-underline-animation">
                    01. About
                </a>
                <a href="/projects" class="nav-btn hover-underline-animation">
                    02. Projects
                </a>
                <a href="/contact" class="nav-btn hover-underline-animation">
                    03. Contact
                </a>
                <a href="/resume" class="nav-btn hover-underline-animation">
                    04. Resume
                </a>
            </nav>
        </header>
    );
}

export default Nav;
