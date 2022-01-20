import React from 'react'
import classes from "./Roadmap.module.css"
import InfoBlock from "../../../components/InfoBlock/InfoBlock";


const Roadmap = () =>{

    return (

        <section className={classes.roadmap_sec} id={"roadmap"}>
            <div className="container section_container">
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <div className={classes.text_block}>
                            <InfoBlock
                            title="Roadmap"
                            subTitle="100%"
                            text={(
                                <div>
                                    <ul>
                                        <li>
                                            Buying a piece of property within sandbox to establish a "fight club within the
                                            metaverse..
                                        </li>
                                        <li>
                                            Build a pay to earn game.
                                        </li>
                                    </ul>
                                    <ol>
                                        <li>
                                            This will be a street fighter style game where your nft will be your character
                                            within the game. third part of the roadmap will be minting creatures to help within
                                            the battle.
                                        </li>
                                        <li>
                                            Inclusion of weapons and special abilities
                                        </li>
                                    </ol>
                                </div>
                            )}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
};

export default Roadmap;