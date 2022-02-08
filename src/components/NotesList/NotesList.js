import React from "react";
import { NavLink } from "react-router-dom";

import "./NotesList.css";
import { notesArr } from "./mockup";
function NotesList () {
    return (
        <div className="notes-list">
            {
                notesArr.map( (item, i) => (
                    <NavLink key="i" to="#">{item}</NavLink>
                ))
            }
        </div>
    )
}

export default NotesList;
