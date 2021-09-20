import React, { useState } from 'react';
import '../../assets/styles/nav.css';
import '../../assets/styles/custom-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if (showMenu) {
        menu = (
            <div className="fixed top-0 left-0 w-4/5 h-full z-50 shadow">
                <a href="/about" className="nav-btn hover-underline-animation">
                    01. About
                </a>
                <a
                    href="/projects"
                    className="nav-btn hover-underline-animation"
                >
                    02. Projects
                </a>
                <a
                    href="/contact"
                    className="nav-btn hover-underline-animation"
                >
                    03. Contact
                </a>
                <a href="/resume" className="nav-btn hover-underline-animation">
                    04. Resume
                </a>
            </div>
        );
    }

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            { menu }
        </nav>
    );
}

export default Navigation;
