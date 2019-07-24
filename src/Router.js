import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/Main.js'
import AllBreeds from './components/AllBreeds.js'
import Category from './components/Category.js'
import Breed from './components/Breed.js'

import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';
import instaicon from './images/insta_icon.png'
import Background from './images/cat_background.jpg'
require('typeface-roboto')
require('typeface-dancing-script')


const useStyles = makeStyles({
  header: {
    fontFamily: 'roboto',
    margin: '0 auto',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    backgroundImage: `url(${Background})`,
    height: 400,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'

  },
  header__div: {
    width: '80%',
    margin: '0 auto'
  },
  header__flex: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: '0 auto'
  },
  insta__icon__img: {
    width: 30,
    marginTop: 10,
    marginLeft: 10
  },
  header__flex__follow: {
    width: '25%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  header__nav:{
    position: 'absolute',
    width: '100%',
    height: 70,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    bottom: 0
  },
  header__nav__list: {
    marginTop: 25,
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto'
  },
  nav__item: {
    listStyleType:'none',
    textTransform: 'uppercase'
  },
  logo__title: {
    fontFamily: 'dancing script',
    fontSize: 56,
    margin: 0,
    textDecoration: 'none',
    color: 'black'
  },
  logo__text: {
    margin: 0,
    letterSpacing: 3.3,
    color: '#323232'
  },
  nav__item__link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 400
  },
  header__quote_text: {
    fontSize: 22,
    textAlign: 'left'
  },
  header__quote: {
    width: '55%',
    marginTop: '22%',
    textAlign: 'left',
    fontFamily: 'dancing script',
  },
  header__quote_auth: {
    textAlign: 'right'
  }
})


const AppRouter = () => {
  const classes = useStyles();

  return (
    <div>
    <Router>
    <header className={classes.header}>
      <div className={classes.header__div}>
        <div className={classes.header__flex}>
          <div className={classes.header__flex__logo}>
            <Link to={`/`}className={classes.logo__title}>El Gato></Link>
          </div>

            <div className={classes.insta__icon}>
              <img className={classes.insta__icon__img} src={instaicon} alt='instagram'/>
            </div>
        </div>
        <div className={classes.header__quote}>
          <q className={classes.header__quote_text}>When Rome burned, the emperor's cats still expected to be fed on time.</q>
          <p className={classes.header__quote_auth}>Seanan McGuire</p>
        </div>
      </div>
    </header>

      <Switch>
        <Route path ='/' exact component={Main}/>
        <Route path ='/breeds/' exact component={AllBreeds}/>
        <Route path ='/category/:id' exact component={Category}/>
        <Route path ='/breeds/:id' exact component={Breed}/>
      </Switch>
    </Router>
    </div>
  )
}


export default AppRouter;
