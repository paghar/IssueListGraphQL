import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

interface IModalProps {
    isShowing:Boolean,
    hide:()=>void,
    title?:string,
    children?:React.ReactNode,
}

const Modal = (props:IModalProps) =>
    props.isShowing
        ? ReactDOM.createPortal(
            <>
                <div className={style.modalOverlay}>
                    <div className={style.modalWrapper}>
                        <div className={style.modal}>
                            <div className={style.modalHeader}>
                                <h4>{props.title}</h4>
                                <button
                                    type="button"
                                    className={style.modalCloseButton}
                                    onClick={props.hide}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className={style.modalBody}>{props.children}</div>
                        </div>
                    </div>
                </div>              
            </>,
            document.body
        )
        : null;


export default Modal;
