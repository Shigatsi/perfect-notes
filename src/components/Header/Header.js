import React from "react";

import './Header.css'
import Toolbar from "../Toolbar/Toolbar"
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header className="header">
            <h1 className="header__title">Perfect notes</h1>
            <Toolbar />
            <NavLink to = "/">
                <button className="header-exit__btn">Выйти</button>
            </NavLink>
        </header>
    )

}

export default Header;
