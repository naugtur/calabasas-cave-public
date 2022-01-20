import React,{useState} from 'react'
import classes from "./Faq.module.css"
import FaqItem from "../../../components/FaqItem/FaqItem"

const Faq = () =>{


    let infoList = [
        {
           buttonId: "collapseOne",
           title: "I've never purchased an NFT before, tell me where to start?",
           text: "The first thing to do is download MetaMask, a browser plugin that will act as your interface to the " +
               "Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase " +
               "or PayPal. From there, you can send the ETH to your MetaMask address and will be able to use any DeFi " +
               "service that connects to MetaMask! For this specific project, join the discord to be aware of future " +
               "events and announcements.",
        },
        {
            buttonId: "collapseTwo",
            title: "What is Calabasas Cave Creatures?",
            text: "The first thing to do is download MetaMask, a browser plugin that will act as your interface to the " +
                "Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase " +
                "or PayPal. From there, you can send the ETH to your MetaMask address and will be able to use any DeFi " +
                "service that connects to MetaMask! For this specific project, join the discord to be aware of future " +
                "events and announcements.",
         },
         {
            buttonId: "collapseThree",
            title: "When will Cave Creatures be available to mint? And for how much?",
            text: "The first thing to do is download MetaMask, a browser plugin that will act as your interface to the " +
                 "Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase " +
                 "or PayPal. From there, you can send the ETH to your MetaMask address and will be able to use any DeFi " +
                 "service that connects to MetaMask! For this specific project, join the discord to be aware of future " +
                 "events and announcements.",
         },
         {
            buttonId: "collapseFour",
            title: "What does the team plan on doing after the launch?",
            text: "The first thing to do is download MetaMask, a browser plugin that will act as your interface to the " +
                 "Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase " +
                 "or PayPal. From there, you can send the ETH to your MetaMask address and will be able to use any DeFi " +
                 "service that connects to MetaMask! For this specific project, join the discord to be aware of future " +
                 "events and announcements.",
         },

    ];
    const [active, setActive] = useState( null);
    return (
       <section id={'faq'} className={classes.faq_sec}>
           <div className="container section_container">
               <div className="row">
                    <div className="col-md-12">
                        <div className={classes.section_title}>
                            <h2>
                                FAQ
                            </h2>
                            <p>Calabasas Cave Creatures understands that for many of you, this may be your first time
                                purchasing an NFT during the minting period. In order to alleviate concerns or questions,
                                we've compiled a list of those that are Frequently Asked, and our expert responses to each.
                                Should you have further questions, please visit the discord where you can talk with
                                community members and the team. Ultimately, the goal is for this to go as smoothly as
                                possible for all parties involved.
                            </p>
                        </div>
                        <div className="accordion" id="accordionExample">
                            {
                                infoList.map((el, index)=>{
                                    return (
                                        <FaqItem key={el+'_'+index} active={active} setActive={setActive} buttonId={el.buttonId} title={el.title} text={el.text}/>
                                    )
                                })
                            }
                        </div>
                    </div>
               </div>
           </div>
       </section>
    )
};

export default Faq;