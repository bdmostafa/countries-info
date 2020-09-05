import React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

const Countries = ({ rows, style }) => {
    
    // console.log(rows.length);

    return (
        <TableBody>
            {rows.length > 0
                && rows[0].map(country => (
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