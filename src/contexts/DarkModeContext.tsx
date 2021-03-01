import { createContext, ReactNode, useContext, useState } from 'react';

interface DarkModeContextData {
    darkModeEnabled: boolean;
    handleDarkModeEnabled: (event) => void;
}

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const handleDarkModeEnabled = (e) => {
        const $html = document.querySelector('html') 
        $html.classList.toggle('dark');
        
        setDarkModeEnabled(e.target.checked);
    }

    return (
        <DarkModeContext.Provider
            value={{
                darkModeEnabled,
                handleDarkModeEnabled,
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )

}

