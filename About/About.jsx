import React from "react";
import "./About.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/all.min.css";
import breadcrumb from "../assets/img/breadcrumb-bg.jpg";
import Footer from "../Footer/Footer";

import LogoCarousel from "../LogoCarousel/LogoCarousel";
const About = () => {
    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <img
                    src={breadcrumb}
                    alt="Breadcrumb"
                    style={{ backgroundColor: "#07212e" }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>We sell fresh fruits</p>
                                <h1>About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="featured-text">
                                <h2 className="pb-3">
                                    Why{" "}
                                    <span className="orange-text">
                                        Fruitkha
                                    </span>
                                </h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-shipping-fast"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Home Delivery</h3>
                                                <p>
                                                    sit voluptatem accusantium
                                                    dolore mque laudantium,
                                                    totam rem aperiam, eaque
                                                    ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-money-bill-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Best Price</h3>
                                                <p>
                                                    sit voluptatem accusantium
                                                    dolore mque laudantium,
                                                    totam rem aperiam, eaque
                                                    ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-briefcase"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Custom Box</h3>
                                                <p>
                                                    sit voluptatem accusantium
                                                    dolore mque laudantium,
                                                    totam rem aperiam, eaque
                                                    ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="list-box d-flex">
                                            <div className="list-icon">
                                                <i className="fas fa-sync-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h3>Quick Refund</h3>
                                                <p>
                                                    sit voluptatem accusantium
                                                    dolore mque laudantium,
                                                    totam rem aperiam, eaque
                                                    ipsa quae ab illo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop-banner">
                <div className="container">
                    <h3>
                        December sale is on! <br /> with big{" "}
                        <span className="orange-text">Discount...</span>
                    </h3>
                    <div className="sale-percent">
                        <span>
                            Sale! <br /> Upto
                        </span>
                        50% <span>off</span>
                    </div>
                    <a href="shop.html" className="cart-btn btn-lg">
                        Shop Now
                    </a>
                </div>
            </section>
            <div className="mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>
                                    Our{" "}
                                    <span className="orange-text">Team</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aliquid, fuga quas itaque
                                    eveniet beatae optio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-1"></div>
                                <h4>
                                    Jimmy Doe <span>Farmer</span>
                                </h4>
                                <ul className="social-link-team">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-2"></div>
                                <h4>
                                    Marry Doe <span>Farmer</span>
                                </h4>
                                <ul className="social-link-team">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-team-item">
                                <div className="team-bg team-bg-3"></div>
                                <h4>
                                    Simon Joe <span>Farmer</span>
                                </h4>
                                <ul className="social-link-team">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoCarousel />
            <Footer />
        </>
    );
};

export default About;
