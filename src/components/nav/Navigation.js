import React, { useState } from 'react';
import '../../assets/styles/nav.css';
import '../../assets/styles/custom-styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuMask;

    if (showMenu) {
        menu = (
            <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
                This is the menu
            </div>
        );
        menuMask = (
            <div
                className="bg-black fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setShowMenu(false)}
            ></div>
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
            {menuMask}
            {menu}
        </nav>
    );
}

export default Navigation;
