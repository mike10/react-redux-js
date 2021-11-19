import React from "react";
import "./Footer.css"

export const Footer = (props) => {

    return(
        <footer className="footer">
            {props.children}
        </footer>
    )
    
}