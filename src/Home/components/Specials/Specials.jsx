import React from 'react'
import classes from "./Specials.module.css"
import Slider from "react-slick";
import img_1 from "../../../assets/images/specials1.png"
import img_2 from "../../../assets/images/specials2.png"
import img_3 from "../../../assets/images/specials3.png"
import img_4 from "../../../assets/images/specials4.png"
import img_5 from "../../../assets/images/specials5.png"
import img_6 from "../../../assets/images/specials6.png"
import img_7 from "../../../assets/images/specials7.png"

const Specials = () =>{
    const cards=[
        {
            img:img_1,
            name: "The Scientist"
        },
        {
            img:img_2,
            name: "The Iron Caveman"
        },
        {
            img:img_3,
            name: "The Boy Scout"
        },
        {
            img:img_4,
            name: "The Shogun"
        },
        {
            img:img_5,
            name: "The Dark Night"
        },
        {
            img:img_6,
            name: "The Idiot"
        },
        {
            img:img_7,
            name: "The Spider"
        },
    ];
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className={`banner ${classes.specials_sec}`}>
            <div className="container section_container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>specials</h2>

                        <Slider {...settings}>
                            {
                                cards.map((el,ind)=>{
                                    return (
                                        <div key={el+'_'+ind} className={classes.card}>
                                            <img src={el.img} className={classes.img} />
                                            <h3>{el.name}</h3>
                                        </div>
                                    )

                                })
                            }
                        </Slider>
                    </div>

                </div>
            </div>

        </section>

    )
};

export default Specials;