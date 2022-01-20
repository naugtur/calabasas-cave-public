import React from 'react'
import SocIcons from "../../../components/SocIcons/SocIcons.jsx"
import classes from "./Footer.module.css"
import InfoBlock from "../../../components/InfoBlock/InfoBlock";


const Footer = () =>{
    return (
        <footer>
            <div className={classes.footer_sec}>
                <div className='container section_container'>
                     <div className='row align-items-center'>
                        <div className="col-lg-6">
                            <InfoBlock
                                title="JOIN THE COMMUNITY"
                                text={(
                                    <p>
                                        Have any questions about the project? Join the discord for more information.
                                    </p>
                                )}
                                button="join discord"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className={classes.footer_info}>
                                <ul className={`menu ${classes.footer_menu}`}>
                                    <li>
                                        <a href="#project">project</a>
                                    </li>
                                    <li>
                                        <a href="#roadmap">roadmap</a>
                                    </li>
                                    <li>
                                        <a href="#faq">faq</a>
                                    </li>
                                </ul>
                                <SocIcons/>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className={classes.copyright_sec}>
                <div className='container section_container'>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-end mb-0">Copyright © 2022 Calabasas Cave. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
};

export default Footer;