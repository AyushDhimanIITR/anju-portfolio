import React from "react";
import styles from './button.module.css';

const Button = (props) => {
    const myClass = `btn ${props.type}`
    return(
        <div className={myClass} >
            <a className={styles.btnLink} onClick={props.clickHandle}>
                <span>{props.value}</span><i></i>
            </a>
        </div>
    )
}

export default Button;