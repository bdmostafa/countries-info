import React, { useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import Countries from './Countries';

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
    console.log(countries);

    return (
        <Container>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries && countries.map((country, idx) => <Countries key={idx} index={idx} country={country}></Countries>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;