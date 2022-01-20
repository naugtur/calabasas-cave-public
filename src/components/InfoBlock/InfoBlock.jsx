import React from 'react'
import classes from "./InfoBlock.module.css";

const InfoBlock = ({title, subTitle, text, button}) =>{

    return (
        <div className={classes.info_card}>
            <h2>{title}</h2>
            {subTitle && <h3>{subTitle}</h3>}
            {text}
            {button && <button className="more_btn">{button}</button>}
        </div>
    )
};

export default InfoBlock;