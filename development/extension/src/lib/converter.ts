import { Currencies } from "../types";

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
}

const API_KEY = ""

  
export  const getExchangeRate = async (from: Currencies, to: Currencies): Promise<number> => {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`);
    const data = await response.json();
  
    if (data && data.rates) {
      const fromRate = data.rates[from];
      const toRate = data.rates[to];
      const exchangeRate = toRate / fromRate;
      console.log(fromRate, toRate, exchangeRate);
  
      return exchangeRate

    } else {
      throw new Error('Failed to retrieve exchange rates');
    }
  };
  
  export default getExchangeRate;
  