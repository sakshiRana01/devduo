import React from "react";
import '../style/button.css'
export const Button=({link,text})=>{
    return(
        <button href={link} className="common-btn">{text}</button>
    )
}