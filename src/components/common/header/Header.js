import React from 'react';

import styles from './Header.module.css';

const header = (props) => {
    return (
        <div className={styles.header}>
            <p className={styles.title}>{props.title}</p>
        </div>
    )
}

export default header;