import React from "react";
import title from "../../../assets/images/logo-2.png";
import classes from "./Heading.module.css";

const Heading = () => {
  return (
    <section className={`banner ${classes.banner}`}>
      <div className="container section_container">
        <div className="row">
          <div className="col-md-12 text-center d-flex flex-column align-items-center">
            <h3>COLLECTION</h3>
            <img
              src={title}
              className={classes.header_title}
              alt="Calabasas Cave"
            />
            {/*<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            <a
              href="https://discord.gg/hUtQRkqX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn more_btn"
            >
              join discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heading;
