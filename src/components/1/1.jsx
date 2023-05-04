import React, { useState, useEffect, useRef } from 'react';
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link } from 'react-scroll'
import styles from './Land1.scss';
import arrowBlue1 from './arrow-blue1.svg';
import arrowGreen1 from './arrow-green1.svg';
import arrowPink1 from './arrow-pink1.svg';

import backgroundTimer from './background-timer.svg';
import logo from './Logo.svg';
import menu from './Меню.png';
import desktopBg from './desktop-bg.png';
import Popup from '../Popup/Popup_new';
import { useSpring, animated } from 'react-spring';
import bg from './bg2.jpg'
import grouparrow from './grouparrow.svg'
import { NewModal } from '../NewModal/NewModal';


const Animation = () => {
  const [bgProps, setBgProps] = useSpring(() => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: {
      duration: 1000
    }
  }));


  const [arrow3Props, setArrow3Props] = useSpring(() => ({
    from: {
      opacity: 0,
      left: -50
    },
    to: {
      opacity: 1,
      left: 0
    },
    config: {
      duration: 500
    }
  }));

  return (
    <div className="animation">

      <animated.img
        className={styles.arrow}
        src={grouparrow}
        style={arrow3Props}
      />
      <animated.img
        className={styles.image}
        src={bg}
        style={bgProps}
      />
    </div>
  );
};


function Land1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [open, setOpen] = useState(false);


  const buttonRef = useRef(null);
  const buttonRect = buttonRef.current && buttonRef.current.getBoundingClientRect();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });



  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlePopupClick = () => {
    setOpen(true)
  };


  useEffect(() => {
    setAnimate(true);
    const countdownDate = new Date("June 01, 2023 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>

      <div className={styles.container}>
        {isPopup && (
          <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
        )}
        {animate && <Animation />}
        <header className={styles.header}>
          <img className={styles.arrowBlue_mob} src={arrowBlue1} alt='' />
          <img className={styles.arrowGreen_mob} src={arrowGreen1} alt='' />
          <img className={styles.arrowPink_mob} src={arrowPink1} alt='' />
          <Link activeClass="active" to="syllabus" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            SYLLABUS
          </Link>
          <Link activeClass="active" to="mentors" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            MENTORS
          </Link>
          <div >
            <img onClick={handleMenuClick} className={styles.header_megacampus_menu} src={menu} alt='' />
            {isMenuOpen && (
              <div className={styles.burger_menu}>
                <MobileMenu onclick={handleMenuClick} />
              </div>
            )}
          </div>
          <img className={styles.header_megacampus_btn} src={logo} alt='' />
          <Link activeClass="active" to="diploma" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            DIPLOMA
          </Link>
          <Link activeClass="active" to="job_guarantee" spy={true} smooth={true} duration={500} className={styles.header_btn}>
            JOB GUARANTEE
          </Link>
        </header>
        <div className={styles.content}>
          <div className={styles.content_container}>
            <h1 className={styles.content_title}>
              Digital Marketing Diploma Course
            </h1>
            <div className={styles.content_info}>
              Enroll in the 6 months course,
              get up-to-date practical skills, and
              secure yourself an exciting high-paid job in trending field of Digital Marketing
            </div>
          </div>
          <div className={styles.content_timer_container}>
            <div className={styles.content_timer_title}>
              Admissions close in
            </div>
            <div className={styles.time}>
              {
                `${timeLeft.days > 9 ? timeLeft.days : '0' + timeLeft.days}:${timeLeft.hours > 9 ? timeLeft.hours : '0' + timeLeft.hours}:${timeLeft.minutes > 9 ? timeLeft.minutes : '0' + timeLeft.minutes}:${timeLeft.seconds > 9 ? timeLeft.seconds : '0' + timeLeft.seconds}`
              }
            </div>
            <div className={styles.dates}>
              <div className={styles.date}>
                DAYS
              </div>
              <div className={styles.date}>
                HOURS
              </div>
              <div className={styles.date}>
                MINUTES
              </div>
              <div className={styles.date}>
                SECONDS
              </div>
            </div>
            <div className={styles.end}>
              Apply for a free consultation from our career expert now
            </div>
            <button onClick={handlePopupClick} ref={buttonRef} className={styles.submit_btn}>
              Submit
            </button>
          </div>
          <img src={backgroundTimer} className={styles.content_timer_backgraund} />
          <img src={desktopBg} className={styles.desktop_content_timer_backgraund} />
        </div>
      </div>
      <NewModal
        content={<div onClose={() => setOpen(false)} >
          <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
        </div>}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Land1;
