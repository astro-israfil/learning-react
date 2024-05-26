import { createContext, useContext } from 'react'

const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeContextProvider = themeContext.Provider

export const useTheme = () => {
    const theme = useContext(themeContext);
    return theme;
}