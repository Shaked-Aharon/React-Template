import React, { useContext, useState, createContext } from "react";
import useLocalStorage from "use-local-storage";

export interface IThemeProvider{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export type Theme = 'dark' | 'light';

export const ThemeContext = React.createContext({theme: 'light', setTheme: (theme: Theme) => {} } as IThemeProvider);

export function useThemeProvider(){
    return useContext(ThemeContext)
}

const ThemeProvider: React.FC<any> = ({children}) => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', "light");

    function changeTheme(theme: any){
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme: changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
