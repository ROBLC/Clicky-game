import React from "react";
import "../styles/Header.css"

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                Clicky Game
             </a>
            <span className="m-4 message">{props.message}</span>
            <span className="m-4">Score: {props.count} | Top score: {props.topscore} </span>
        </nav>
    );
}

export default Header;
