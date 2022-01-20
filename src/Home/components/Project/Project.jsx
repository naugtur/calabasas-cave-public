import React from 'react'
import classes from "./Project.module.css"
import InfoBlock from "../../../components/InfoBlock/InfoBlock"


const Project = () =>{

    return (
        <section className={classes.project_sec} id="project">
            <div className="container section_container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={classes.text_block}>
                            <InfoBlock
                                title="Project Presentation"
                                text={(<p>Calabasas Cave creatures is A community driven collectibles project, it features Cavemen
                                    from the land of Caverium.  In the beginning, cavemen roamed the blockchains of Caverium
                                    in search of treasures to bring home in the form of food and items to trade for food.
                                    This caused wars and bloody brawls between the Cavemenians.  Till the great collapse of
                                    Caverium which was a result of society being so consumed by the warring, no one had time
                                    to notice the massive blizzard coming before it already set in and covered Caverium in a
                                    sheet of hard rock-solid ice.  Thousands of years later Caverium is now known to the
                                    modern world as Calabasas, California.  The cavemen are thawing out one by one and they
                                    are set out to conquer this new world for all its treasures.</p>)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default Project;