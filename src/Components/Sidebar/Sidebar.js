import React from "react";
import styles from './sidebar.module.css';
import hamburger from '../../Assets/quill_hamburger.svg';
import twitter from "../../Assets/twitter.svg";
import lk from "../../Assets/lk.svg";
import be from "../../Assets/Vector.svg";
import insta from "../../Assets/Group.svg";
import mail from "../../Assets/email.svg";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

    return (
        <div className={styles.sidebar}>
        <div className={styles.hamburger}>
            <img className={styles.ham} src={hamburger} onClick={props.onClick} /> 
        </div>
        <div className={styles.menu}>
            <Link className={styles.link} to="/">
                <div>Home</div>
            </Link>
            <Link className={styles.link} to="/about">
                <div>About</div>
            </Link>
            <Link className={styles.link} to='/projects'>
                <div>Projects</div>
            </Link>
            <Link className={styles.link} to='/contact'>
                <div>Contact</div>
            </Link>
        </div>
        <div className={styles.social}>
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={lk} alt="" />
            <img src={be} alt="" />
        </div>
        <div className={styles.mail}>
            <img src={mail} alt="mail-icon" />
            <a href="mailto:chorotiyaanju01@gmail.com" style={{textDecoration:"none", color:"#fff"}}>
            Chorotiyaanju01@gmail.com
            </a>
        </div>
        </div>
    )
};

export default Sidebar;