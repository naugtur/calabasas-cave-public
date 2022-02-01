import React from 'react'
import twitter from "../../assets/images/twitter.svg"
import discord from "../../assets/images/discord.svg"
import "./SocIcons.css"

const SocIcons = () =>{
    return (
        <ul className="soc_icons d-flex">
            <li className="soc_icon">
                <a href="https://twitter.com/CaveCreatures" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter"/></a>
            </li>
            <li className="soc_icon">
                <a href="https://discord.gg/NmCcAKR6NM" target="_blank" rel="noopener noreferrer"><img src={discord} alt="Discord"/></a>
            </li>
        </ul>
    )
}

export default SocIcons;