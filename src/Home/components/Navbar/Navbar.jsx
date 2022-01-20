import React from 'react';
import logo from "../../../assets/images/logo.svg"
import classes from "./Navbar.module.css"
import SocIcons from "../../../components/SocIcons/SocIcons";

const Navbar = () =>{
    return (
        <nav className={classes.header}>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-lg-12 d-flex justify-content-between align-items-center p-0
                     ${classes.header_menu_row}`}>
                        <img src={logo} className={classes.logo} alt="logo"/>
                        <div className={`d-flex align-items-center ${classes.header_mrnu_container}`}>
                            <ul className={`${classes.header_menu} d-flex menu`}>
                                <li>
                                    <a href="#project">project</a>
                                </li>
                                <li>
                                    <a href="#roadmap">roadmap</a>
                                </li>
                                <li>
                                    <a href="#creatures">creatures</a>
                                </li>
                                <li>
                                    <a href="#faq">faq</a>
                                </li>
                            </ul>
                        </div>
                        <SocIcons/>
                    </div>
                </div>
            </div>
        </nav>

    )
};

export default Navbar;