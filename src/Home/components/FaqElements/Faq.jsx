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
            text: "Calabasas Cave Creatures is a collection of 7,777 unique NFTs that are generated randomly using a " +
                "pre-defined set of traits. Once you own one you'll have the exclusive rights to use the artwork as your" +
                " digital identity, meaning feel free to use it as your profile picture and express yourself! Later on," +
                " some special events will occur where you may be able to further the identity of your Cave Creature." +
                " Calabasas Cave Creatures is also a community of like-minded individuals, with a passion for NFTs " +
                "in general. Make sure to join the discord to join in on the fun!",
         },
         {
            buttonId: "collapseThree",
            title: "When will Cave Creatures be available to mint? And for how much?",
            text: "The team is aiming for a January 2022 launch. The price of each Creature will be set at 0.06 ETH." +
                " There is no bonding curve associated with this platform, so all Cave Creatures will cost the same amount.",
         },
         {
            buttonId: "collapseFour",
            title: "What does the team plan on doing after the launch?",
            text: "Post-launch, the team will begin preparing for the Calabasas Cave Creatures’ underground fight club." +
                " Eventually, all holders will have the option to fight their Cave Creature in a PvP arena, allowing for" +
                " the chance to earn ETH, build experience, and potentially revealing hidden and sometimes unique extra" +
                " traits. Be careful though, if you lose, it may cost you some ETH!",
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