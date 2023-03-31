import React, { useEffect, useState } from 'react';
import hamburger from '../../Assets/hamburger.svg';
import twitter from "../../Assets/twitter.svg";
import lk from "../../Assets/lk.svg";
import be from "../../Assets/Vector.svg";
import insta from "../../Assets/Group.svg";
import Sidebar from "../Sidebar/Sidebar";
import styles from './about.module.css';
import Loader from '../Loader/Loader';

const About = () => {

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
        {isLoading ? (<Loader />) :(

            <div className={styles.main}>
                <div className={styles.project}>
                    <div className={styles.heading}>
                        About <span>Me</span>
                    </div>
                    <div className={styles.hr} />
                    <div className={styles.space} />
                    <div className={styles.about}>
                        Hi,  I'm Anju Chorotiya, passionate about creating engaging digital experiences through UI/UX,
                        web3, and graphic design. I believe in pushing boundaries and solving problems through design.
                        Let's chat and work together!
                    </div>
                    <div className={styles.photo}>

                    </div>
                    <div className={styles.footer}>
                        <div className={styles.gridCont}>
                            <div className={styles.gridItem}>Education</div>
                            <div className={styles.gridDesc}>Indian Institute of Technology Roorkee, Uttarakhand <br />
                                                        <span>
                                                            B. Tech | Metallurgical and Material Engineering <br />
                                                            Nov 2021 – May 2025</span></div>
                            <div className={styles.gridItem}>Skills</div>
                            <div className={styles.gridDesc}>UI/UX Design, Web3 Design, Graphic Design</div>
                            <div className={styles.gridItem}>Software</div>
                            <div className={styles.gridDesc}>Figma, Illustration, Photoshop, Canva</div>
                        </div>
                    </div>
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
                ) :
                    <Sidebar onClick={handleClick} />}
            </div>
        )}
        </>
    )
};


export default About;
