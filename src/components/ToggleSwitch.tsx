import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

import styles from '../styles/components/ToggleSwitch.module.css';

export default function ToggleSwitch() {
    const { darkModeEnabled, handleDarkModeEnabled } = useContext(DarkModeContext);

    return (
        <div className={styles.container}>
            <input type="checkbox" name="Dark Mode" id="darkModeToggle" onChange={handleDarkModeEnabled} />
            <label htmlFor="darkModeToggle">{darkModeEnabled ? 'Light Theme' : 'Dark Theme' }</label>
        </div>
    )
}


