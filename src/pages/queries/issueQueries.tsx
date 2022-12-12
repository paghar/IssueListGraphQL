import {gql} from "@apollo/client";

export const issuesQuery = gql`
query($name: String!, $owner: String!, $state:[IssueState!], $after: String) {           
    repository(name: $name, owner: $owner) {
    description
    id
    issues(states: $state, first:15, after: $after) {
        edges {
        node {
            state
            url
            author {
            ... on User {
                id
                name
            }
            }
            bodyHTML
            closedAt
            createdAt
            id
            number
            titleHTML
        }
        cursor
        }
        pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
        }
        totalCount
    }
 }
}`; 
