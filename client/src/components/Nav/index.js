import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-info">
            <a className="navbar-brand" href="/">
                Book Search
            </a>
        <ul className="nav justify-content-end">
            <li className="nav-item">
            <a className="navbar-brand" href="/">
                Home
            </a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="/saved">
                Saved
            </a>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;
