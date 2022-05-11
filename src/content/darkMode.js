import React from "react";
import DarkStyle from "../darkModeStyle";
import Toggle from "./toggle";
import { Global, lightMode, darkMode } from "./global";
import { ThemeProvider } from "styled-components";




const Dark = () => {
    const [theme, toggleTheme] = DarkStyle();
    const themeMode = theme === 'dark' ? lightMode : darkMode;

    return (
        <>
            <ThemeProvider theme={themeMode}>
                <Global className="global" />
                <Toggle themeE={theme} toggleTheme={toggleTheme} />
                <button className="btn-primary">click ABOVE to change the mode</button>
            </ThemeProvider>
        </>

    )
}


export default Dark;