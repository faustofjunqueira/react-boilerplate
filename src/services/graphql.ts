import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Environment } from "../config/environment";


export const graphqlClient: ApolloClient<NormalizedCacheObject> = new ApolloClient(Environment.apolloGraphQlCfg);
