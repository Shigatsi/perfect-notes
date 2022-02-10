import React from "react";

import "./Profile.css";

function Profile({ isOpen, onClose }) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className={`profile ${isOpen ? "" : "profile_type_close"}`}>
            <div className="profile__content">
                <div className="profile__header">
                    <h3 className="profile__title">Profile settings</h3>
                    <button className="profile__close-btn" onClick={onClose}>
                        Close
                    </button>
                </div>
                <form className="profile__form">
                    <ul className="pfofile__settings">
                        <li className="profile__setting">
                            <label className="profile__label" for="username">
                                username
                            </label>
                            <input
                                className="profile__input"
                                id="username"
                                name="username"
                            ></input>
                        </li>
                        <li className="profile__setting">
                            <label className="profile__label" for="password">
                                password
                            </label>
                            <input
                                className="profile__input"
                                id="password"
                                name="password"
                            ></input>
                        </li>
                        <li className="profile__setting">
                            <label className="profile__label" for="email">
                                email
                            </label>
                            <input
                                className="profile__input"
                                id="email"
                                name="email"
                            ></input>
                        </li>
                        <li className="profile__setting">theme</li>
                        <li className="profile__setting">language</li>
                    </ul>
                    <button
                        type="submit"
                        onSubmit={handleSubmit}
                        onClick={onClose}
                        className="profile__save"
                    >
                        Save
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Profile;
