import {ApolloClient,InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.github.com/graphql",
    headers: {        
        "Authorization":`Bearer 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`            
    }
});

export default client;
