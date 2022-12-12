import React from "react";
import  style  from "./IssueList.module.css";
import Issue from "../issue/Issue";
import Switch from "../../ui/switch/Switch";
import {IssueState} from "../../../data/enum";

type IIssueListProps = {    
    issueList:any,
    isOpen:boolean,
    onChange: () => void
}

const IssueList = (props:IIssueListProps) => {        
    return(
        <div className={style.container}> 

            <h3>{props.issueList?.repository?.description}</h3>
            <div className={style.switchWrapper}>
                <span>State:</span>
                <Switch isOpen={props.isOpen} onChanged={props.onChange}/>                
            </div>  
            
            <table className={style.styledTable}>
                <thead>
                    <tr>
                        <th>#</th>  
                        <th>{props.isOpen ? IssueState.OPEN : IssueState.CLOSED}</th> 
                        <th></th>                                               
                    </tr>
                </thead>
                <tbody>                  
                    {
                        props.issueList?.repository?.issues?.edges?.map((issue:any,index:number)=> (                            
                            <Issue key={index} index={index} issue={issue}  />
                        ))
                    }                                                       
                </tbody>
            </table>   

        </div>
    );
};

export default IssueList;