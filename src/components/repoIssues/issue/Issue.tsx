import React, {useState} from "react";
import Button from "../../ui/button/Button";
import Style from "./Issue.module.css";
import Modal from "../../ui/modal/Modal";

interface IIssueProps {
    issue: any,
    index: number,
}

const Issue = (props:IIssueProps) => {  

    const [isShowing, setIsShowing] = useState(false); 
    const details = `#${props?.issue?.node?.number},by ${props?.issue?.node?.author?.name}`; 

    const closeModal = () => setIsShowing(!isShowing); 
    const openModal = () => setIsShowing(true);
    
    return (
        <tr>
            <td>{props.index}</td>
            <td>                
                <div dangerouslySetInnerHTML={{__html: props?.issue?.node?.titleHTML}}/>
                <span dangerouslySetInnerHTML={{__html: details}}/>
            </td>   
            <td><Button className={Style.button} onClick={openModal} >...</Button></td>  
            <Modal
                isShowing={isShowing}
                hide={closeModal}
                title= {"Issue Detail"}
            >
                <div dangerouslySetInnerHTML={{__html: props?.issue?.node?.bodyHTML}}/>
            </Modal>                     
        </tr>
    );
};

export default Issue;

