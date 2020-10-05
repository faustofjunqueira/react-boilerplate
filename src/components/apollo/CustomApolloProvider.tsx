import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Environment } from "../../config/environment";

export const CustomApolloProvider: React.FC = ({ children }) => {
  const {keycloak, initialized} = useKeycloak();

  const authLink = setContext((_, {headers}) => {
    if(!initialized || !keycloak?.authenticated) {
      return {
        headers
      }
    }
    const token = keycloak?.token;
    return {
      headers: {
        ...headers,
        'Authorization': token ? `Bearer ${token}` : ""
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(Environment.graphqlLink),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
