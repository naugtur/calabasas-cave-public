import React from 'react'
import img_1 from "../../../assets/images/img_1.jpg"
import img_2 from "../../../assets/images/img_2.jpg"
import img_3 from "../../../assets/images/img_3.jpg"
import img_4 from "../../../assets/images/img_4.jpg"
import img_5 from "../../../assets/images/img_5.jpg"
import img_6 from "../../../assets/images/img_6.jpg"
import img_7 from "../../../assets/images/img_7.jpg"
import img_8 from "../../../assets/images/img_8.jpg"
import img_9 from "../../../assets/images/img_9.jpg"
import img_10 from "../../../assets/images/img_10.jpg"
import img_11 from "../../../assets/images/img_11.jpg"
import img_12 from "../../../assets/images/img_12.jpg"
import img_13 from "../../../assets/images/img_13.jpg"
import classes from "./Carousel.module.css"
import Slider from "react-slick";

const Carousel = () => {
    const imgs=[img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13];
    const imgs_2=[ img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_1, img_2, img_3, img_4, img_5, img_6];
    const settings = {
        dots: false,
        arrows:false,
        autoplay: true,
        speed: 1200,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
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

    const settings2 = {
        dots: false,
        arrows:false,
        autoplay: true,
        speed: 1200,
        slidesToShow: 6,
        slidesToScroll: -1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
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
       <section className={classes.imgs_slider}>
           <div className="container-fluid">
               <div className="row">
                   <div className={`col-md-12 ${classes.slider}`}>
                       <Slider {...settings}>
                           {
                               imgs.map((el,ind)=>{
                                   return (
                                       <div key={el+'_'+ind} className={classes.carousel_card}>
                                           <img src={el} className={classes.img} alt=""/>
                                       </div>
                                   )
                               })
                           }
                       </Slider>
                   </div>
                   <div className={`col-md-12 ${classes.slider}`}>
                       <Slider {...settings2}>
                           {
                               imgs_2.map((el, ind)=>{
                                   return (
                                       <div className={classes.carousel_card} key={el+'_'+ind}>
                                           <img src={el} className={classes.img}  alt=""/>
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

export default Carousel;
