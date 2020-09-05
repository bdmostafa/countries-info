import React, { useEffect } from 'react';
import Countries from './Countries';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const Home = ({ countries, setCountries }) => {

    // Function to fecth data
    const loadData = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
    }

    // useEffect Hook executes when page is loaded
    useEffect(loadData, []);
    // console.log(countries);

    // CSS Style on Material UI
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        img: {
            width: '40px'
        }
    });

    const classes = useStyles();

    function createData(no, name, flag, region) {
        return { no, name, flag, region };
    }

    // Get the countries data with map and store in rows array
    const countryRows = [
        countries && countries.map((country, idx) => createData(idx + 1, country.name, country.flag, country.region))
    ];

    // console.log(countryRows);

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#No</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Flag</TableCell>
                            <TableCell align="left">Region</TableCell>
                            <TableCell align="left">Details</TableCell>
                        </TableRow>
                    </TableHead>

                    <Countries countryRows={countryRows} style={classes}></Countries>
                    
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Home;