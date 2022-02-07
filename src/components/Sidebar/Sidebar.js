import React from "react";

import "./Sidebar.css";

import NotesList from "../NotesList/NotesList";

function Sidebar () {
    return(
        <div className="sidebar">
            <NotesList />
        </div>
    )
}

export default Sidebar;
