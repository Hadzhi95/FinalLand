import React, { useState, useRef, useEffect } from "react";
import styles from './Land7.scss';
import check from './check.svg';
import mobileCheck from './check-mobile.png'
import Popup from "../Popup/Popup_new";
import { NewModal } from "../NewModal/NewModal";

function Land7() {
  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);
  const [isPopup2, setIsPopup2] = useState(false);
  const [active2, setIsActive2] = useState(false);

  const [open, setOpen] = useState(false);


  const buttonRef = useRef(null);
  const buttonRect = buttonRef.current && buttonRef.current.getBoundingClientRect();

  const buttonRef2 = useRef(null);
  const buttonRect2 = buttonRef2.current && buttonRef2.current.getBoundingClientRect();


  const handlePopupClick = () => {
    // setIsPopup(true);
    // setIsActive(true);
    setOpen(true)

  };
  const handlePopupClick2 = () => {
    // setIsPopup2(true);
    // setIsActive2(true);
    setOpen(true)

  };
  return (
    <>
      
      <div className={styles.container}>

        <div>
          <div className={styles.title}>
            Join the community
            of students to seek help
            and share experiences
          </div>
          <button onClick={handlePopupClick} className={styles.btn} ref={buttonRef}>Join</button>
          {isPopup && (
              <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)}/>
        )}
        </div>
        <div className={styles.col}>
          <div className={styles.row}>
          </div>
          <div className={styles.row}>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Practice-oriented lessons
            </div>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Study at your own pace
            </div>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> Real cases to build a portfolio
            </div>
            <div className={styles.info}>
              <img className={styles.check} src={check} /> 25 students in a batch
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_mobile}>
        <div className={styles.title_mobile}>
          Join the community
          of students to seek help
          and share experiences
        </div>
        <div className={styles.col_mobile}>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Practice-oriented lessons</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Study at your own pace</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>Real cases to build a portfolio</p>
          </div>
          <div className={styles.info_mobile}>
            <img className={styles.check_mobile} src={mobileCheck} />
            <p className={styles.info_text_mobile}>25 students in a batch</p>
          </div>
        </div>
        <button onClick={handlePopupClick2} className={styles.btn_mobile} ref={buttonRef2}>Join</button>
        {isPopup2 && (
              <Popup setIsPopup={setIsPopup2} active={active2} y={Math.round(buttonRect2?.top)}/>
        )}
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

export default Land7;