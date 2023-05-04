import React, { useEffect, useRef, useState } from "react";
import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'
import styles from './Land10.scss';
import Popup from "../Popup/Popup_getcall";
import InputMask from 'react-input-mask'
import { useNavigate } from "react-router-dom";
import { NewModal } from "../NewModal/NewModal";
import axios from 'axios';


function Land10() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [open, setOpen] = useState(false);


  const buttonRef = useRef(null);
  const buttonRect = buttonRef.current && buttonRef.current.getBoundingClientRect();

  const [isPopup, setIsPopup] = useState(false);
  const [active, setIsActive] = useState(false);
  const [checkbox, setCheckbox] = useState(true)


  const handleSuccess = async () => {
    if (phoneNumber.length > 10 && name.length > 2 && email.includes('@') && checkbox) {
      try {
        const response = await axios.post('/landings/digitalmarketing/amocrm/amo.php', {
          phoneNumber,
          name,
          email
        });
        // setIsPopup(true);
        console.log(response.data);
        setIsActive(true);
        setOpen(true)
      } catch (error) {
        console.error(error);
        setIsActive(true);
        setOpen(true)
      }

    } else {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className={styles.container}>
        {isPopup && (
          <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect?.top)} />
        )}
        <div className={styles.col}>
          <div className={styles.title}>
            Are you one of them?
          </div>
          <div className={styles.info}>
            Apply for a free career consultation now
          </div>
        </div>
        <div>
          <div className={styles.form_input}>
            <div className={styles.colum}>
              {/* <input className={styles.input} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
               countries={['IN']} onChange={value => setPhoneNumber(value)} /> */}
              <label>
                <InputMask mask="+\9\1 99 9999 9999" maskChar="" className={styles.tel} countries={['IN']} labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)} />
                <span className={styles.icon_search}></span>
              </label>
              <input className={styles.input} placeholder="Name" value={name} onChange={e => setName(e.target.value)} type='text' />
            </div>
            <div className={styles.colum}>
              <input className={styles.email} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              <button className={styles.btn} onClick={handleSuccess} ref={buttonRef}>Get a call</button>

            </div>
            <div className={styles.check}>
              <input className={styles.checkbox} onClick={() => setCheckbox((prev) => !prev)} checked={checkbox} type="checkbox" />
              <span className={styles.checkbox__text}>By clicking the checkbox you agree to our <a className={styles.link} onClick={() => navigate('/privacy')} >privacy policy</a> and <a className={styles.link} onClick={() => navigate('/agreement')}>training agreement</a>.</span>
            </div>
          </div>

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

export default Land10;