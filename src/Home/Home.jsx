import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Heading from "./components/Heading/Heading"
import Carousel from "./components/Carousel/Carousel"
import Countdown from "./components/Countdown/Countdown"
import Project from "./components/Project/Project"
import Specials from "./components/Specials/Specials";
import Roadmap from "./components/Roadmap/Roadmap";
import Creatures from "./components/Creatures/Creatures"
import Faq from "./components/FaqElements/Faq"
import Footer from "./components/Footer/Footer";

const Home = () =>{
    return (
        <>
            <Navbar/>
            <Heading/>
            <Countdown/>
            <Carousel/>
            <Project/>
            <Specials/>
            <Roadmap/>
            <Creatures/>
            <Faq/>
            <Footer/>
        </> 
    )
};

export default Home;