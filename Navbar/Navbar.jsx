import React, { useState } from "react";
import favicon from "../assets/img/favicon.png";
import search_icon from "../assets/img/search_icon.png";
import "./Navbar.css";
import cart_icon from "../assets/img/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={favicon} alt="" />
                <p>Fruikha</p>
            </div>
            <ul className="nav-menu">
                <li
                    onClick={() => {
                        setMenu("home");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/"
                    >
                        Home
                    </Link>
                    {menu === "home"}
                </li>
                <li
                    onClick={() => {
                        setMenu("about");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/about"
                    >
                        About
                    </Link>
                    {menu === "about"}
                </li>
                <li
                    onClick={() => {
                        setMenu("pages");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/pages"
                    >
                        Pages
                    </Link>
                    {menu === "pages"}
                </li>
                <li
                    onClick={() => {
                        setMenu("news");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/news"
                    >
                        News
                    </Link>
                    {menu === "news"}
                </li>
                <li
                    onClick={() => {
                        setMenu("contact");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/contact"
                    >
                        Contact
                    </Link>
                    {menu === "contact"}
                </li>
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                >
                    <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to="/shop"
                    >
                        Shop
                    </Link>
                    {menu === "shop"}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "#fff" }}
                >
                    {" "}
                    <img src={cart_icon} alt="" />
                </Link>
                <Link
                    to="/search"
                    style={{ textDecoration: "none", color: "#fff" }}
                >
                    {" "}
                    <img src={search_icon} alt="" />
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
