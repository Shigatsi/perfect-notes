import React from "react";

import "./Sidebar.css";

import NotesList from "../NotesList/NotesList";
import { NavLink } from "react-router-dom";



function Sidebar ({openProfile}) {
    const login = 'judgy2pizza'
    return(
        <div className="sidebar">
            <button className="sidebar__link sidebar__link-type-profile" onClick={openProfile}>
                {login}
            </button>
            <NotesList />
        </div>
    )
}

export default Sidebar;
