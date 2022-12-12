import styles from "../assets/global.module.css";
import {ApolloProvider} from "@apollo/client";
import client from "../services/client";
import Issues from "../container/repoIssues/Issues";

export default function Home() { 
    return (       
        <div className={styles.container}>
            <ApolloProvider client={client}>
                <Issues/>
            </ApolloProvider>                            
        </div>
    );
}
