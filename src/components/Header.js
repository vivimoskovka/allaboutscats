import React from 'react';
import {makeStyles} from '@material-ui/styles';
import axios from 'axios';
import {Link} from 'react-router-dom';
import instaicon from '../images/insta_icon.png'
import Background from '../images/cat-sleeping.jpg'
require('typeface-roboto')
require('typeface-dancing-script')

const useStyles = makeStyles({
  header: {
    fontFamily: 'roboto',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    backgroundImage: `url(${Background})`,
    height: 400,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'

  },
  header__flex: {
    display: 'flex',
    width: '80%',
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
    marginTop: 20
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
    margin: 0
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
  }
})

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.header__flex}>
        <div className={classes.header__flex__logo}>
          <h1 className={classes.logo__title}>El Gato</h1>
          <p className={classes.logo__text}>All about cats</p>
        </div>

        <div className={classes.header__flex__follow}>
          <p className={classes.follow__text}>Follow our Instagram</p>
          <div className={classes.insta__icon}>
            <img className={classes.insta__icon__img} src={instaicon} alt='instagram'/>
          </div>
        </div>
      </div>
      <nav className={classes.header__nav}>
        <ul className={classes.header__nav__list}>
          <li className={classes.nav__item}><a href='' className={classes.nav__item__link}>Home</a></li>
          <li className={classes.nav__item}><a href='' className={classes.nav__item__link}>All about cats</a></li>
          <li className={classes.nav__item}><a href='' className={classes.nav__item__link}>Breeds</a></li>
        </ul>
      </nav>
    </header>
  )
}
