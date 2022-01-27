import React from 'react'
import classes from "./Creatures.module.css"


const Creatures = () =>{

    return (
        <section  id={"creatures"} className={classes.creatures_sec}>
            <h2 className="text-center">calabasas cave creatures</h2>
            <div className={classes.creatures}>
                <div className={`container section_container ${classes.creatures_container}`}>
                    <div className="row">
                        <div className={`col-lg-12 col-xl-3 d-flex flex-lg-column-reverse flex-xl-column align-items-center ${classes.column}`}>
                            <h6 className={`${classes.info} ${classes.order_2}`}>
                                BUY LAND IN SANDBOX METAVERSE. 
                            </h6>
                            <h6 className={`${classes.info} ${classes.order_3}`}>
                                RELEASE 3D CAVEMAN VOXEL ART, FREE TO CLAIM JUST PAY GAS
                            </h6>
                            <h3 className={`${classes.num} ${classes.order_1}`}>01</h3>
                        </div>
                        <div className={`col-lg-12 col-xl-3 d-flex flex-column align-items-center justify-content-end ${classes.orange}`}>
                            <h3 className={classes.num}>02</h3>
                            <h6 className={classes.info}>
                                Release PVP game.
                            </h6>
                        </div>
                        <div className={`col-lg-12 col-xl-3 d-flex align-items-center justify-content-end  ${classes.column}`}>
                            <h6 className={classes.info}>
                                Weapons airdrops.
                            </h6>
                            <h3 className={classes.num}>03</h3>
                        </div>
                        <div className={`col-lg-12 col-xl-3 d-flex flex-column align-items-center justify-content-center ${classes.orange}`}>
                            <h3 className={classes.num}>04</h3>
                            <h6 className={classes.info}>
                                Begin development of 3D game.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Creatures;