/* eslint-disable @typescript-eslint/no-explicit-any */
import sendHttpRequest from '../../../utils/helpers/api.helpers';
import config from '../../../config';

const getCountryByName = async (country: string) => {
  const { data, status } = await sendHttpRequest(
    `https://restcountries.com/v3.1/name/${country}?fullText=true`,
    'GET',
  );
  if (status !== 200) {
    throw new Error('Error occurred while looking up country');
  }
  const [countryData] = data;
  const currencies: string[] = Object.keys(countryData?.currencies);
  return {
    countryDetails: {
      full_name: countryData?.name?.official,
      population: countryData?.population,
      currencies: [] as any,
    },
    currencies,
  };
};

export const getCurrentExchangeRates = async (currency: string) => {
  const apiKey = config.FIXER_API_KEY;
  const { data, status } = await sendHttpRequest(
    `http://data.fixer.io/api/latest?access_key=${apiKey}&base=${currency}&symbols=SEK`,
    'GET',
  );  
  if (status !== 200 || !data.success) {    
    const error = !data.success ? data.error.type : ''
    throw new Error(`Error occurred while getting exchange rates - ${error}`);
  }
  return data?.rates;
};

export default getCountryByName;
