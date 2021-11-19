import React, { useContext } from "react";
import "./ChoseTheme.css"
import { ThemeContext } from "../context/context"


export const ChoseTheme =()=>{

    const theme = useContext(ThemeContext);

    const themeChange = () => {
        theme()
    }

    
    return(
        <label>Темная тема<input type="checkbox" onChange={themeChange}/></label> 
    )
    
}
