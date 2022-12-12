import React from "react";

interface IBtnProps {    
    className?:string,
    onClick?:(event: any)=>void,
    children?: React.ReactNode
}

const Button = (props:IBtnProps) => {
    return (
        <a className={props.className} onClick={props.onClick}>{props.children}</a>
    );
};

export default Button;