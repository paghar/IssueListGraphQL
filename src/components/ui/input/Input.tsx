import React from "react";

interface IInputProps {    
    id?: string,
    className:string,
    value:string | undefined,
    type:"button" | "submit" | "reset" | "text" | "email" | undefined,
    placeholder:string,
    onChange:(e:any) => void,
    name:string,
}

const Input = (props:IInputProps) => {
    return (
        <input 
            id ={props.id}
            className={props.className}                 
            value={props.value}
            type={props.type}
            placeholder={props.placeholder} 
            onChange={props.onChange}
            name={props.name}
        />
    );
};

export default Input;