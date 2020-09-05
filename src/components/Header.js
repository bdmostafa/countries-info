import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import bannerImg from '../components/assets/images/banner-world-map.jpg'

const Header = () => {
    const useStyles = makeStyles({
        h2: {
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            backgroundImage: `url(${bannerImg})`
        }
    });

    const classes = useStyles();
    return (
        <Container fluid className={classes.h2}>
            <h2>Welcome to Countries Info Live</h2>
        </Container>
    );
};

export default Header;