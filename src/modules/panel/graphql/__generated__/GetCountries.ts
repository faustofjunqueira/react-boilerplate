/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountries
// ====================================================

export interface GetCountries_country_continent {
  __typename: "Continent";
  name: string;
}

export interface GetCountries_country {
  __typename: "Country";
  name: string;
  native: string;
  phone: string;
  continent: GetCountries_country_continent;
}

export interface GetCountries {
  country: GetCountries_country | null;
}

export interface GetCountriesVariables {
  code: string;
}
