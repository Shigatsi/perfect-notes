import React from "react";
import "./NoteHeader.css";

import TagContainer from "../TagContainer/TagContainer";

function NoteHeader () {
    return (
        <div className="note-header">
            <h2 className="note-title">Title</h2>
            <p className="note-subtitle">15:12</p>
            <TagContainer />
        </div>

    )
}

export default NoteHeader;
