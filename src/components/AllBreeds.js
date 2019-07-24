import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 30,
  },
  card: {
    maxWidth: 290,
    marginTop: 20
  },
  breeds: {
    width:'80%',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: 50,
    paddingTop: 20,
    marginTop: 20,
    boxSizing: 'border-box'
  },
  breeds__flex: {
    boxSizing: 'border-box',
    padding: '8px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  breeds__title: {
    fontSize: 32
  }
}));

export default function AllBreeds() {
  const classes = useStyles();
  const [breeds, setBreeds] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:8080/breeds`)
    .then(response => {
      console.log(response.data);
      setBreeds(response.data)
    })
  }, [])

  return(
    <div className={classes.breeds}>
      <h2 className={classes.breeds__title} >All breeds:</h2>
      <div className={classes.breeds__flex}>
        {breeds.map(breed => {
          return(
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={breed.img_url}
                  title="Contemplative Reptile"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {breed.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" component={Link} to={`/breeds/${breed.id}`}>
                Read about this breed
              </Button>
            </CardActions>
          </Card>
          )
        })}
      </div>

    </div>

  )
}
