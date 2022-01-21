import React, { useState, useEffect, useContext } from "react";
import { DAppContext } from "../../../context";
import classes from "./Countdown.module.css";

const Countdown = () => {
  const [timerToggle, setTimerToggle] = useState(false);
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  let [count, setCount] = useState(1);

  const {
    contractDetails,
    transactionHash,
    mint,
    connectWallet,
    active,
    connected,
  } = useContext(DAppContext);

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

  if (!contractDetails) return null;

  const { price, saleIsClosed } = contractDetails;

  if (saleIsClosed) {
    return (
      <div className="bg-white d-inline-block p-2 mb-3">
        <h4 className="txt-danger m-0">Sale has not started yet</h4>
      </div>
    );
  }

  return (
    <section className={classes.banner}>
      <div className="container section_container">
        <div className="row">
          <div className={`col-md-12 z_index `}>
            <div className={classes.orange_sec}>
              {timerToggle ? (
                <div
                  className={`d-flex flex-wrap align-items-center w-100 ${classes.calculator}`}
                >
                  <h2>minting</h2>
                  <div
                    className={`d-flex flex-wrap ${classes.counter_container}`}
                  >
                    <h6>{price} ETH Each</h6>
                    <div className={classes.counter}>
                      <button
                        onClick={() => setCount(count >= 1 ? --count : count)}
                      >
                        -
                      </button>
                      <span>{count}</span>
                      <button
                        onClick={() => setCount(count < 20 ? ++count : count)}
                      >
                        +
                      </button>
                    </div>
                    {!active && !connected ? (
                      <button
                        className={`more_btn ${classes.counter_btn}`}
                        onClick={connectWallet}
                      >
                        connect wallet
                      </button>
                    ) : (
                      <button
                          className={`more_btn ${classes.counter_btn}`}
                          onClick={() => mint(count)}
                        >
                          mint
                        </button>
                    )}
                    {transactionHash && (
                      <>
                        <a
                          href={`https://rinkeby.etherscan.io/tx/${transactionHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='text-white mx-2 text-decoration-underline'
                        >
                          View on Block Explorer
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className={`d-flex flex-wrap align-items-center w-100 ${classes.countdown}`}
                >
                  <h2>countdown</h2>
                  <ul className={`d-flex flex-wrap ${classes.countdown_timer}`}>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
