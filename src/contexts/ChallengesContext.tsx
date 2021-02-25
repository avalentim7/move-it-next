import { createContext, ReactNode, useState } from 'react';

import challenges from '../../challenges.json';

interface Challenge {
    type: 'body | eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    challengesCompleted: number;
    currentExperience: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(7);
    const [challengesCompleted, setChallengesCompleted] = useState(23);
    const [currentExperience, setCurrentExperience] = useState(756);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            challengesCompleted,
            currentExperience,
            experienceToNextLevel,
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge,
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}