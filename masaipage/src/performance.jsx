import React from 'react';
import styles from '../src/performance.module.css'

function Performance(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <img src={props.image}></img>
            <p>{props.title}</p>
            
        </div>
    )
}

export default Performance
