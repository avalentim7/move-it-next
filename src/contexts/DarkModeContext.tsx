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

    const handleDarkModeEnabled = () => {
        const $html = document.querySelector('html') 
        $html.classList.toggle('dark');
        
        setDarkModeEnabled(!darkModeEnabled);
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

