import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Button from '../../../common/button/Button'

import styles from './NavLinks.module.css';

const navSections = () => {
    return (
        <ul id={styles.navSections}> 
            <li><NavLink smooth to="../App/App#projects" exact activeClassName="selected">Projects</NavLink></li>
            <li><NavLink smooth to="../App/App#contact" exact activeClassName="selected">Contact</NavLink></li>
            
            <span id={styles.resumeButton}>
                <a href="https://www.dropbox.com/sh/416co0qiii87bql/AABwy73pD_51yBbKv93lO02Ha?dl=0" target="_blank">
                    <Button>Resume</Button>
                </a>
            </span>
        </ul>
    )
} 

export default navSections;