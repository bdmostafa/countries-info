import React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

const Countries = ({ countryRows, style }) => {
    
    // console.log(countryRows.length);

    return (
        <TableBody>
            {countryRows.length > 0
                && countryRows[0].map(country => (
                    <TableRow key={country.no}>
                        <TableCell component="th" scope="row">
                            {country.no}
                        </TableCell>
                        <TableCell align="left">{country.name}</TableCell>
                        <TableCell align="left"> <img className={style.img} src={country.flag} alt="" /> </TableCell>
                        <TableCell align="left">{country.region}</TableCell>
                        <TableCell align="left"> <Link to={`/country/${country.name}`}>Detail</Link> </TableCell>
                    </TableRow>
                ))}
        </TableBody>
    );
};

export default Countries;