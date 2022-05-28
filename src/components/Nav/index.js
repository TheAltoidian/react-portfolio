import React from "react";

function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                    <span>Cullen Casey's portfolio</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;