import React, {useState, useEffect} from 'react'
import classes from "./Countdown.module.css"


const Countdown = () =>{

    const [timerToggle, setTimerToggle] = useState(false);
    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    let price = 0.075;
    let [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);

    useEffect(() =>{
        let countDownDate = new Date("Jan 18, 2022 2:41:00").getTime();

        let interval = setInterval(function() {

            let now = new Date().getTime();
            let distance = countDownDate - now;


            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);

            if((days<=0 && hours<=0 && minutes<=0 && seconds<=0)){
                setTimerToggle(true);
            }
        }, 1000);
        return () =>{
            clearInterval(interval)
        }
    },[]);


    return (
        <section className={classes.banner}>
            <div className="container section_container">
                <div className="row">
                    <div className={`col-md-12 z_index `}>
                        <div className={classes.orange_sec}>
                        {
                            timerToggle ? (
                                    <div className={`d-flex flex-wrap align-items-center w-100 ${classes.calculator}`}>
                                        <h2>minting</h2>
                                        <div className={`d-flex flex-wrap ${classes.counter_container}`}>
                                            <h6>0.075 ETH Each</h6>
                                            <div className={classes.counter}>
                                                <button onClick={() => setCount(count>=1 ? --count : count)}>-</button>
                                                <input value={count}/>
                                                <button onClick={() => setCount(count<20 ? ++count : count)}>+</button>
                                            </div>
                                            <button className={`more_btn ${classes.counter_btn}`} onClick={() => setTotal(price * count)}>connect wallet</button>
                                        </div>
                                    </div>)
                                : (
                                    <div className={`d-flex flex-wrap align-items-center w-100 ${classes.countdown}`}>
                                        <h2>countdown</h2>
                                        <ul  className={`d-flex flex-wrap ${classes.countdown_timer}`}>
                                            <li>
                                                <h2 className={classes.num}>{timerDays}</h2>
                                                <span className={classes.countdown_title}>days</span>
                                            </li>
                                            <li>
                                                <h2 className={classes.num}>{timerHours}</h2>
                                                <span className={classes.countdown_title}>hrs</span>
                                            </li>
                                            <li>
                                                <h2 className={classes.num}>{timerMinutes}</h2>
                                                <span className={classes.countdown_title}>min</span>
                                            </li>
                                            <li>
                                                <h2 className={classes.num}>{timerSeconds}</h2>
                                                <span className={classes.countdown_title}>sec</span>
                                            </li>
                                        </ul>
                                    </div>)
                        }
                        </div>
                  </div>
                </div>
            </div>
        </section>

    )
};

export default Countdown;