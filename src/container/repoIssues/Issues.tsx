import React, {useState} from "react";
import  style  from "./IssueList.module.css";
import {useQuery} from "@apollo/client";
import {IssueState} from "../../data/enum";
import {issuesQuery} from "../../pages/queries/issueQueries";
import IssueList from "../../components/repoIssues/issueList/IssueList";
import Button from "../../components/ui/button/Button";

const Issues = () => {    
    
    const [isOpen, setIsOpen]= useState(true);
    const onChange = () =>{setIsOpen(!isOpen);};   
    
    const {data, loading, error,fetchMore} = useQuery(issuesQuery,
        {variables: {
            name: "reactjs.org",
            owner: "reactjs",
            state:isOpen ? IssueState.OPEN : IssueState.CLOSED,
        }});

    const fetchMoreData =()=> {
        const {endCursor} = data.repository.issues.pageInfo;
        fetchMore({
            variables: {after: endCursor},
            updateQuery: (prevResult, {fetchMoreResult}) => {
                fetchMoreResult.repository.issues.edges = [
                    ...prevResult.repository.issues.edges,
                    ...fetchMoreResult.repository.issues.edges
                ];
                return fetchMoreResult;
            }
        });
    };    

    if (loading) {
        return (
            <div>Loading</div>
        );
    }    
  
    return (
        <>
            {
                !error 
                    ?
                    !data.repository?.issues?.edges
                        ? <div>There are no such issues</div>
                        : <IssueList
                            issueList={data}
                            isOpen={isOpen}
                            onChange={onChange}
                        />
                    : null
            }           
            <div className={style.showMore}>
                <Button
                    className={style.showMoreBtn}
                    onClick={fetchMoreData}
                >
                    show more issues
                </Button>
            </div>   
        </>
     
    );
};

export default Issues;

