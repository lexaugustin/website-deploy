import React from 'react';

import styles from './Button.module.css';

const button = (props) => <a id={styles.button} href={props.link} target="_blank">{props.children}</a>

export default button;