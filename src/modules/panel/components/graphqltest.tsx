import { useQuery } from "@apollo/client";
import React from "react";
import JSONPretty from "react-json-pretty";
import { WaitData } from "../../../components/waitData/WaitData";
import { GET_COUNTRIES } from "../graphql/queries";
import * as GetCountries from "../graphql/__generated__/GetCountries";

export const GraphQlTest = () => {
  const { data, loading } = useQuery<
    GetCountries.GetCountries,
    GetCountries.GetCountriesVariables
  >(GET_COUNTRIES, {
    variables: {
      code: "BR",
    },
  });
  return (
    <WaitData loading={loading}>
      <JSONPretty data={data} />
    </WaitData>
  );
};
