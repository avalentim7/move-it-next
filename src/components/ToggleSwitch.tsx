import React, { useContext, useState } from 'react';
import Switch from 'react-switch';

import { FaMoon, FaSun } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

import { DarkModeContext } from '../contexts/DarkModeContext';

import styles from '../styles/components/ToggleSwitch.module.css';

export default function ToggleSwitch() {
    const { darkModeEnabled, handleDarkModeEnabled } = useContext(DarkModeContext);

    return (
        <>
        <Switch
            onChange={handleDarkModeEnabled}
            checked={darkModeEnabled}
            offHandleColor={'#fff'}
            offColor={'#d8d8d8'}
            onColor={'#333'}
            onHandleColor={'#222'}
            checkedHandleIcon={<div className={'switch-icon'}><FiMoon color={'#fff'} /></div>}
            uncheckedHandleIcon={<div className={'switch-icon'}><FiSun color={'#33bbff'} /></div>}
            checkedIcon={<div></div>}
            uncheckedIcon={<div></div>}
            handleDiameter={30}
            boxShadow={'0px 0px 60px 0.2px #ccc'}
            activeBoxShadow={'0px 0px 60px 0.2px #ccc'}
            height={15}
            width={70}
            className={'toggle-switch-container'}
        />
        {/* <div className={styles.container}>
            <input type="checkbox" name="Dark Mode" id="darkModeToggle" onChange={handleDarkModeEnabled} />
            <label htmlFor="darkModeToggle">{darkModeEnabled ? 'Light Theme' : 'Dark Theme' }</label>
        </div> */}
        </>
    )
}


