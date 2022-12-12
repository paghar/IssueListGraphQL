import React from "react";
import style from "./Switch.module.css";

interface ISwitchProps {
    isOpen: boolean,
    onChanged: () => void
}

const Switch = (props:ISwitchProps) => {    
    return(
        <label className={style.switch}>
            <input type="checkbox" checked={props.isOpen} onChange={props.onChanged}/>
            <div className={style.slider}></div>
        </label> 
    );
};

export default Switch;