import React from "react";

import "./Sidebar.css";

import NotesList from "../NotesList/NotesList";
import { NavLink } from "react-router-dom";



function Sidebar () {
    const login = 'judgy2pizza'
    return(
        <div className="sidebar">
            <button className="sidebar__link sidebar__link-type-profile" to = "profile">
                {login}
            </button>
            <NotesList />
        </div>
    )
}

export default Sidebar;
