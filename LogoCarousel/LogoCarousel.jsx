import React from "react";
import logo1 from "../assets/img/company-logos/1.png";
import logo2 from "../assets/img/company-logos/2.png";
import logo3 from "../assets/img/company-logos/3.png";
import logo4 from "../assets/img/company-logos/4.png";
import logo5 from "../assets/img/company-logos/5.png";
import "./LogoCarousel.css";
const LogoCarousel = () => {
    return (
        <div className="logo-carousel-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-carousel-inner">
                            <div className="single-logo-item">
                                <img src={logo1} alt="" />
                            </div>
                            <div className="single-logo-item">
                                <img src={logo2} alt="" />
                            </div>
                            <div className="single-logo-item">
                                <img src={logo3} alt="" />
                            </div>
                            <div className="single-logo-item">
                                <img src={logo4} alt="" />
                            </div>
                            <div className="single-logo-item">
                                <img src={logo5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
