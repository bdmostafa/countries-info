import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ index, country }) => {
    console.log(country)
    const {
        name,
        flag,
        region
    } = country;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td> <img src={flag} alt="" style={{ width: '40px'}}/> </td>
            <td>{region}</td>
            <td> <Link to={`/country/${name}`}> Detail </Link> </td>
        </tr>

    );
};

export default Countries;