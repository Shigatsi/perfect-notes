import React from "react";

import './Header.css'
import Toolbar from "../Toolbar/Toolbar"

function Header () {
    return (
        <header className="header">
            <h1 className="header__title">Perfect notes</h1>
            <Toolbar />
            <button className="header-exit__btn">Выйти</button>

        </header>
    )

}

export default Header;
