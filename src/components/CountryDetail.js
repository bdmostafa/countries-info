import React from 'react';

const CountryDetail = ({ country }) => {

    // Destructuring country properties
const {
    alpha2Code,
    altSpellings,
    area,
    borders,
    callingCodes,
    capital,
    currencies,
    flag,
    language,
    name,
    nativeName,
    numericCode,
    population,
    region,
    regionalBlocs,
    subregion,
    timezones,
    topLevelDomain,
    translations:{
        br, de, es, fa, fr, hr, it, ja, nl, pt
    }
} = country;
const [...bor] = borders
const [name1, name2, name3] = altSpellings;

    return (
        <div>
            
        </div>
    );
};

export default CountryDetail;