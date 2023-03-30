import React, { useState, useEffect } from 'react';
import styles from './project.module.css';
import hamburger from '../../Assets/hamburger.svg';
import twitter from "../../Assets/twitter.svg";
import lk from "../../Assets/lk.svg";
import be from "../../Assets/Vector.svg";
import insta from "../../Assets/Group.svg";
import Sidebar from "../Sidebar/Sidebar";
import pc from '../../Assets/iMac.svg';
import blocsoc from '../../Assets/MacbookPro.svg';
import app from '../../Assets/phone.svg';
import Loader from '../Loader/Loader';

const Projects = () => {

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


    return(
        <>
        {isLoading ? (<Loader />) : (

            <div className={styles.main}>
        <div className={styles.project}>
            <div className={styles.heading}>
                My <span>Work</span>
            </div>
            <div className={styles.hr} />
                <div className={styles.space} />
            <div className={styles.list}>
                <div className={styles.webDesign}>
                    <img className={styles.monitor} src={pc} alt='' />
                    <div className={styles.content}>
                        <div>Web Design</div>
                        <p className={styles.tagline}>Inventory Website</p>
                        <p className={styles.tagline}>(Tinkering Lab IITR)</p>
                        <a href='http://13.127.42.238/' target='blank' style={{textDecoration:'none', color:'#ffd283'}}>
                        <div className={styles.live}>Live</div>
                        </a>
                    </div>
                </div>
                <div className={styles.space} />
                <div className={styles.web3Design}>
                    <div className={styles.content2}>
                        <div>Web3 Design</div>
                        <p className={styles.tagline}>Filecoin</p>
                        <p className={styles.tagline}>(Blocsoc IITR)</p>
                        <div className={styles.live}>View</div>
                    </div>
                    <img className={styles.monitor2} src={blocsoc} alt='' />
                </div>
                <div className={styles.space} />
                <div className={styles.appDesign}>
                    <img className={styles.monitor} src={app} alt='' />
                <div className={styles.content}>
                        <div>App Design</div>
                        <p className={styles.tagline}>AstroAdventures</p>
                        <p className={styles.tagline}>(Space Tourism App)</p>
                        <div className={styles.live}>View</div>
                    </div>
                </div>
                <div className={styles.space} />
                <div className={styles.graphicDesign}>
                    <div className={styles.content2}>
                        <div>Graphic Design</div>
                        <p className={styles.tagline}>Poster/Logo</p>
                        <div className={styles.live}>View</div>
                    </div>
                </div>
            </div>
               <div className={styles.footerSpace} >
                    <button className={styles.viewMore}>
                    View More
                    </button>
                </div>
            </div>
            {sidebar ? (
                <div className={styles.right}>
            <div className={styles.hamburger}>
            <img className={styles.ham} src={hamburger} onClick={handleClick} /> 
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
};


export default Projects;
