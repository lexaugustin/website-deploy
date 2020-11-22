import React from 'react';

import { Spring } from 'react-spring/renderprops'
import { Transition } from 'react-spring/renderprops'
import portrait from '../../../img/banner/portrait.png'
import Button from '../../common/button/Button';

import styles from './Banner.module.css'

const banner = () => {

    return (
        <div id={styles.banner}>

            <div id={styles['banner-content']}>

                <div id={styles['picture-side']}>
                    <Spring
                        from={{opacity: 0, marginBottom: -500}}
                        to={{opacity: 1, marginBottom: 0}}
                        config={{duration:1000}}
                    >
                        {props => (
                            <div style={props}>
                                <img src={portrait} alt=""/>
                            </div>
                        )}

                    </Spring>
                </div>

                
    
                <div id={styles['text-side']}>
                    <Spring
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        config={{delay:1000, duration:1000}}
                    >
                        {props => (
                            <div style={props}>
                                <div id={styles['text-side-content']}>
                                </div>
                            </div>
                        )}

                    </Spring>
                </div>

            </div>
        </div>
    )
}

export default banner;