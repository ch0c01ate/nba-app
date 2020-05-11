import React from "react";
import "./header.css"

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul className="nav-bar-elements">
                    <li><a className="first-li">Home</a></li>
                    <li><a>League Leaders</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        )
    }
}
