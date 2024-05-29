import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://apiv2.allsportsapi.com/football/', {
          params: {
            met: 'Countries',
            APIkey: 'process.env.allSportsApi',
          },
        });
        setCountries(response.data.result);
      } catch (err) {
        setError(err);
      }
    };

    fetchCountries();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className='justify-center text-center p-10 text-4xl'>Countries</h1>
      <ul className='flex flex-row justify-evenly'>
        {countries.map((country) => (
            <div key={country.country_key} className='flex flex-col'>
                <div className='flex flex-col justify-center text-center'>
                    <img src = {country.country_logo} className='h-20 w-40'/>
                    <li className='pt-2'>{country.country_name}</li>
                </div>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
