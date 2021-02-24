import React from 'react';

import styles from '../styles/components/ExperienceBar.module.css';

interface ExperienceBarProps {
    progressBar: number;
}

export default function ExperienceBar(props: ExperienceBarProps) {
    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{ width: `${props.progressBar}%` }} />
                <span className={styles.currentExperience} style={{ left: `${props.progressBar}%` }}>
                    {props.progressBar * 6}xp
                </span>
            </div>
            <span>600xp</span>
        </header>
    )
}