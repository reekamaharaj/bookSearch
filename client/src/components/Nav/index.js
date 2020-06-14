import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand" href="/">
                Book Search
            </a>
            <a className="navbar-brand" href="/">
                Home
            </a>
            <a className="navbar-brand" href="/saved">
                Saved
            </a>
        </nav>
    );
}

export default Nav;
