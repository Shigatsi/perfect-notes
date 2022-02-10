import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__copyright">&#169; Shigatsi, 2022</div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="https://github.com/Shigatsi">Github</a>
                    </li>
                    <li className="footer__link">
                        <a href="https://telegram.me/Shigatsi">tg</a>
                    </li>
                    <li className="footer__link">
                        <a href="#">Gmail</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
