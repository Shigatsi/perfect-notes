import React from "react";

import './Profile.css';

function Profile () {
    const isOpen = true;
    return (
        <section className = {`profile ${isOpen ? '' : 'profile_type_close'}`} >
            <div className="profile__content">
                <div className="profile__header">
                    <h3 className="profile__title">Profile settings</h3>
                    <button className="profile__close-btn">Close</button>
                </div>
                <form className="profile__form">
                    <ul className="pfofile__settings">
                        <li className="profile__setting">
                            <label className="profile__label">login</label>
                            <input className="profile__input"></input>
                        </li>
                        <li className="profile__setting">
                            <label className="profile__label">password</label>
                            <input className="profile__input"></input>
                        </li>
                        <li className="profile__setting">
                            <label className="profile__label">email</label>
                            <input className="profile__input"></input>
                        </li>
                        <li className="profile__setting">
                            theme
                        </li>
                        <li className="profile__setting">
                            language
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    )
}

export default Profile;
