import React, { useEffect, useRef, useState } from "react";

import "react-phone-number-input/style.css";
import en from 'react-phone-number-input/locale/en.json'
import Popup from "../Popup/Popup_getcall";
import InputMask from 'react-input-mask'

// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';
// import 'intl-tel-input/build/js/utils';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';
import styles from './Land19.scss';
import { useNavigate } from "react-router-dom";
import { NewModal } from "../NewModal/NewModal";
import axios from 'axios';

function Land19() {
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
          email,
          checkbox
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

  // useEffect(() => {
  //   const input = intlTelInput(inputRef.current, {
  //     initialCountry: 'auto',
  //     geoIpLookup: function (success, failure) {
  //       fetch('//ipinfo.io/json?token=574821ec29cd20')
  //         .then((resp) => resp.json())
  //         .then((ipdata) => {
  //           success(ipdata.country);
  //         })
  //         .catch(() => {
  //           failure();
  //         });
  //     },
  //   });
  //   inputRef.current.addEventListener('change', () => {
  //     const phoneNumber = parsePhoneNumberFromString(input.getNumber(), input.getSelectedCountryData().iso2);
  //     if (phoneNumber) {
  //       const formattedNumber = `+${phoneNumber.countryCallingCode} (${phoneNumber.nationalNumber.slice(0, 3)}) ${phoneNumber.nationalNumber.slice(3, 6)} ${phoneNumber.nationalNumber.slice(6, 8)} ${phoneNumber.nationalNumber.slice(8)}`;
  //       setPhoneNumber(formattedNumber);
  //     } else {
  //       setPhoneNumber('');
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className={styles.container}>
      {isPopup && (
              <Popup setIsPopup={setIsPopup} active={active} y={Math.round(buttonRect.top)} />
            )}
        <div className={styles.col}>
          <h3 className={styles.title}>
            Are you in yet?
          </h3>
          <div className={styles.title_mobile}>
            Are you one of them?
          </div>
          <div className={styles.info}>
            Apply for a free career consultation now
          </div>
        </div>
        <div>
          <div className={styles.form_input}>
            <div className={styles.colum}>


              {/* <input className={styles.input} placeholder="Number" type="tel" ref={inputRef} value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} /> */}
              {/*     background: rgba(249,249,249,.01);
    border: none;
    outline: none; */}
              {/* <PhoneInput className={styles.input} countries={['IN']} defaultCountry="IN" labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                onChange={value => setPhoneNumber(value)} /> */}
              <div className={styles.label}>
                <InputMask mask="+\9\1 99 9999 9999" maskChar="" className={styles.tel} countries={['IN']} labels={en} placeholder="Phone Number" type="tel" ref={inputRef} value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)} />
                <span className={styles.icon_search}></span>
              </div>
              
              <input className={styles.input} placeholder="Name" value={name} onChange={e => setName(e.target.value)} type='text'/>
            </div>
            <div className={styles.colum}>
              <input className={styles.input} placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              <button onClick={handleSuccess} className={styles.btn} ref={buttonRef}>Get a call</button>
            </div>
            <div className={styles.check}>
              <input className={styles.checkbox}onClick={() => setCheckbox((prev) => !prev)} checked={checkbox} type="checkbox" />
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

export default Land19;
