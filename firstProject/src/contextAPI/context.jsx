import { createContext, useMemo, useReducer, useState } from "react";
import reducer from "./reducer";


export const ThemeContext = createContext();

const data = {
    user: {
        login: true,
        name: 'Usama'
    },
    theme : 'light'
}

function MyContext({children}) {
//   const [theme, setTheme] = useState('light');

  const [state, dispatch] = useReducer(reducer, data)

//   const themeMemo = useMemo(()=>({theme, setTheme}),[theme])
     const themeValue = useMemo(()=>({state,dispatch}),[state])


  return (
    <ThemeContext.Provider value={themeValue}>
        {children}
    </ThemeContext.Provider>
  )
}

export default MyContext