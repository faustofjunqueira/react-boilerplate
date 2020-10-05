import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries($code: ID!) {
    country(code: $code) {
      name,
      native,
      phone,
      continent {
        name
      }
    }
  }
`
