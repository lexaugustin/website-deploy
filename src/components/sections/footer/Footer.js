import React from 'react'

import Socials from '../../common/socials/Socials'

import styles from './Footer.module.css'

const footer = () => {
    return (
        <footer id={styles.footer}>
            <div id={styles.bottom}>
                <span><p>Made With<span><i className="fas fa-heart"></i></span>By Alexander</p></span>
                <span><p>© 2019 Alexander Augustin. All rights reserved</p></span>
            </div>
        </footer>
    )
}

export default footer;