import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from './loader.module.css';

function Loader() {
    return(
        <div className={styles.loader}>
            <div className={styles.spinLoader}>

        <InfinitySpin
            width='200'
            color="#FFD283" />
            </div>

            </div>
    )
}

export default Loader;