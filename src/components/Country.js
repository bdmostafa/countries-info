import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryDetail from './CountryDetail';

const Country = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

// Function to fecth data
const loadData = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
        .catch(err => console.log(err))
}

// useEffect Hook executes when countryName is come from router dynamic path
useEffect(loadData, [countryName]);


console.log(country.name)
// const { name } = country;
    return (
        <>
            {
                country && <CountryDetail country={country} ></CountryDetail>
            }
        </>
    );
};

export default Country;