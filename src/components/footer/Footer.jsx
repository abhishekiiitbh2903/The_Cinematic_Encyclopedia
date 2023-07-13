import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                    <li className="menuItem">Privacy-Policy</li>
                </ul>
                <div className="infoText">
                Discover the mesmerizing world of cinema and television with our comprehensive search platform. Unleash your curiosity and delve into an expansive collection of movies and TV shows. Find detailed information, ratings, reviews, and more at your fingertips. Let our intuitive search feature be your guide to uncovering the perfect entertainment experience. Start your search now and embark on a thrilling cinematic journey
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
