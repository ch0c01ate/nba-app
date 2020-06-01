import React from "react";
import "./header.css"

import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul className="nav-bar-elements">
                    <li><Link to="/" className="first-li">Home</Link></li>
                    <li><Link to="/leaders">League Leaders</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/signUp">Sign Up</Link></li>
                </ul>
            </div>
        )
    }
}
