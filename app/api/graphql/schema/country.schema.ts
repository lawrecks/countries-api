export default `
type Query {
  country(name: String!): Country
},
type Rate {
  SEK: String
}
type Currency {
  code: String
  exchange_rates: Rate
}
type Country {
  name: String
  full_name: String
  population: String
  currencies: [Currency]
}
`;
