import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COUNTRIES } from "../graphql/queries";
import * as GetCountries from '../graphql/__generated__/GetCountries';
import JSONPretty from 'react-json-pretty';

export const GraphQlTest = () => {
  const {data, error, loading} = useQuery<GetCountries.GetCountries, GetCountries.GetCountriesVariables>(GET_COUNTRIES, {variables: {
    code: "BR"
  }});

  if(loading) return <>loading</>;
  if(error) return <>Error Founded: {JSON.stringify(error)}</>;
  if(!data) return <>Not found</>
  return <JSONPretty data={data} />
}
