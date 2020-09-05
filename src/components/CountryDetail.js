import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const CountryDetail = ({ country }) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            color: 'black',
            a: {
                textDecoration: 'none',
                cursorPointer: 'none',
                '&:hover': {
                    textDecoration: 'none'
                }
            }
        },
    });

    const classes = useStyles();

    console.log(country);

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
        languages,
        name,
        nativeName,
        numericCode,
        population,
        region,
        regionalBlocs,
        subregion,
        timezones,
        topLevelDomain,
        translations
        // translations: {
        //     br, de, es, fa, fr, hr, it, ja, nl, pt
        // }
    } = country;

    // const [...bor] = borders
    // const [name1, name2, name3] = altSpellings;
    console.log(translations);
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    height="140"
                    image={flag}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Native Name: {nativeName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Alpha 2 Code (as ISO 3166-1): {alpha2Code}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span>Alternative Name (Spelling): </span>
                        {
                            altSpellings && altSpellings.map(alt => alt).join(', ')
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Area: {area} km<sup>2</sup>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span>Borders: </span>
                        {
                            borders && borders.map(border => border).join(', ')
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span> Calling Codes: </span>
                        {
                            callingCodes && callingCodes.map(code => code).join(', ')
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Currency:
                        {
                            currencies && `${currencies[0].symbol}  (${currencies[0].name}) `
                        }

                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Capital: {capital}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Language: {
                            languages && `${languages[0].nativeName} (${languages[0].name})`
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Numeric Code: {numericCode}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Population: {population}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Region: {region}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <span>Regional Blocs:</span>
                        {
                            regionalBlocs > 0 ? regionalBlocs.map(blocs => blocs).join(', ') : ' Not Found'
                        }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Sub Region: {subregion}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Time Zone: {timezones}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Top Level Domain: {topLevelDomain}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Translations (in br, de, es, fa, fr, hr, it, ja, nl, pt): {
                            translations
                            && Object.values(translations).join(', ')
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" color="primary">
                    <a href={`https://en.wikipedia.org/wiki/${name}`} target="_blank" > See More on <strong>wikipedia</strong>  </a>
                </Button>
                <Button variant="outlined" color="primary">
                    <Link to="/">Go Back</Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default CountryDetail;