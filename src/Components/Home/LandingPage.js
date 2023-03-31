import React, {useEffect, useState} from "react";
import styles from "./landingPage.module.css";
import Button from "../Button/Button";
import hamburger from '../../Assets/hamburger.svg';
import twitter from "../../Assets/twitter.svg";
import lk from "../../Assets/lk.svg";
import be from "../../Assets/Vector.svg";
import insta from "../../Assets/Group.svg";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


const LandingPage = ({mouseOverEvent, mouseOutEvent}) => {

    const [sidebar, setSidebar] = useState(true);
    // console.log(sidebar);

    const connectClickHandle = e =>{
      console.log("Connected")
    };

    const resumeClickHandle = e => {
      alert("Resume")
    };

    const handleClick = () =>{
      setSidebar((open) => !open)
    };

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1200);
    }, [])

  return (
    <>
    {isLoading ? (<Loader />) : (
      
      <div onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} className={styles.main}>
      <div className={styles.left}>
        <div className={styles.nameBox}>
        <span>Hi,</span>
        <p>My name is</p>
        <p className={styles.name}>Anju Chorotiya</p>
        </div>
        <div className={styles.post}>UI/UX designer</div>
        <div className={styles.mainButtons}>
          <Link to="/contact">
            <Button value={"Let’s connect"} clickHandle={connectClickHandle}/>
            </Link>
          <Button value={"Resume"} clickHandle={resumeClickHandle}/>
          </div>
          </div>
          {sidebar ? (
            <div className={styles.right}>
            <div className={styles.hamburger}>
            <img alt="" className={styles.ham} src={hamburger} onClick={handleClick} /> 
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
            {/* <div className={styles.right}>
            <div className={styles.hamburger}>
            <img className={styles.ham} src={hamburger} onClick={() => setSidebar((open) => !open)} /> 
            </div>
            <div className={styles.verticalName}>Anju Chorotiya</div>
            <div className={styles.line}></div>
            <div className={styles.social}>
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={lk} alt="" />
            <img src={be} alt="" />
            </div>
          </div> */}
          {/* <Sidebar /> */}
          </div>
          )}
          </>
  );
};

export default LandingPage;
