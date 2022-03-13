/* eslint-disable @typescript-eslint/no-explicit-any */

import getCountryByName, { getCurrentExchangeRates } from '../services';

const lookUpCountry = async ({ name }: any) => {
  const { countryDetails, currencies } = await getCountryByName(name);
  for (const code of currencies) {
    const exchange_rates = await getCurrentExchangeRates(code);
    const currencyData = {
      code,
      exchange_rates,
    };
    countryDetails.currencies.push(currencyData);
  }
  return {
    name,
    ...countryDetails,
  };
};
export default lookUpCountry;
