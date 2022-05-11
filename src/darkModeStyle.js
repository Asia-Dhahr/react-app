import { useState } from "react";

const DarkStyle = () => {
    const [theme, setTheme] = useState('light')
    const toggleDark = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return [theme, toggleDark]
}


export default DarkStyle;