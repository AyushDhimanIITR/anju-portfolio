import React,{ useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './contact.module.css';
import hamburger from '../../Assets/hamburger.svg';
import twitter from "../../Assets/twitter.svg";
import lk from "../../Assets/lk.svg";
import be from "../../Assets/Vector.svg";
import insta from "../../Assets/Group.svg";
import Loader from '../Loader/Loader';

const Contact = () => {

    const [sidebar, setSidebar] = useState(true);

    const handleClick = () =>{
        setSidebar((open) => !open)
      };

      const [isLoading, setLoading] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 600);
      }, [])

    return (
        <>
        {isLoading ? (<Loader />) : (

            <div className={styles.contact}>
            <div className={styles.left}>
            <div className={styles.head}>
            Let’s <span>Connect</span>
            <p>Open for design internship for summer 2023</p>
            </div>
            <div className={styles.separator}>
            
            </div>
            <div className={styles.contactCard}>
            <input placeholder='Name' className={styles.inputname} />
            <input placeholder='Email' className={styles.email} />
            <input placeholder='Message' className={styles.message} />
            <button className={styles.submitBtn} type='submit'>Submit</button>
            </div>
            <p className={styles.address}>Address: Gaytri Nagar  Beawar Road, Nimaj (Pali) <br /> 306303</p>
            </div>
            {sidebar ? (
                <div className={styles.right}>
                <div className={styles.hamburger}>
                <img alt='' className={styles.ham} src={hamburger} onClick={handleClick} /> 
                </div>
                <div className={styles.verticalName}>Anju Chorotiya</div>
                <div className={styles.line}></div>
                <div className={styles.social}>
                <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={lk} alt="" />
            <img src={be} alt="" />
            </div>
            </div>
            ): 
            <Sidebar onClick={handleClick}/>}
            </div>
            )}
      </>
    )
}

export default Contact;