import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
category: {
  width: '80%',
  margin: '0 auto',
  backgroundColor: 'white',
  marginTop: 20,
  padding: 50,
  paddingTop: 20,
  boxSizing: 'border-box'
},
card: {
  maxWidth: 290,
  marginTop: 20
},
category__flex: {
  boxSizing: 'border-box',
  padding: '8px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'stretch',
},
breed__name: {
  margin: 0
}
}));


  const CatCategory = ({match}) => {
  const classes = useStyles();

  const [category, setCategory] = React.useState([])

  React.useEffect(() => {
    axios.get(`http://localhost:8080/breeds`)
    .then(response => {
      console.log(response.data);
      setCategory(response.data.filter(x => x.category_id == match.params.id))
      console.log(category);
    })

  },[])

    return(
      <div className={classes.category}>

        <div className={classes.category__flex}>
          {category.map(breed => {
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
                  <Typography gutterBottom variant="h5" className={classes.breed__name} component="h2">
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

export default CatCategory;
