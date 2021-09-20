import React, { useState } from 'react';
import '../../assets/styles/nav.css';
import '../../assets/styles/custom-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if (showMenu) {
        menu = (
            <div
                className="menu-bar animated fadeIn shadow"
                style={{
                    marginRight: '10px',
                    borderRadius: '10px'
                }}
            >
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
            {menu}
            <span className="text-xl">
                <FontAwesomeIcon
                    className="menu-icon"
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <i className={showMenu ? { faTimes } : { faBars }} />
                </FontAwesomeIcon>
            </span>
        </nav>
    );
}

export default Navigation;
