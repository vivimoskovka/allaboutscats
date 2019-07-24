import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
  breed: {
    boxSizing: 'border-box',
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: 50,
    paddingTop: 20,
    marginTop: 20,
    boxSizing: 'border-box'
  },
  container: {
    width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'spase-between'
    },
    textField: {
      marginLeft: 0,
      marginRight: 0,
    },
    textField__text: {
      width:'100%',
    },
    textField__auth: {
      width:'20%',
    },
    dense: {
      marginTop: 0,
    },
    menu: {
      width: 200,
    },
    root: {
      textAlign: 'left',
      padding: 20,
      paddingLeft: 30,
      marginTop: 30,
      position: 'relative'
    },
    breed_img: {
      width: '100%'
    },
    root__text: {
      fontSize: 14
    },
    button: {
      height: 50,
      width: 100,
      marginTop: 20,
      marginLeft: 20
    },
    comment: {
      width: '100%',
      margin: '0 auto'
    },
    description: {
      lineHeight: 1.5,
      textAlign: 'left'
    },
    breed__name: {
      fontSize: 32
    },
    button_del: {
      width: 20,
      float: 'right',
      position: 'absolute',
      right: 30,
      bottom: 20
    },
    root__author: {
      fontStyle: 'italic',
      fontSize: 12
    },
    description_title: {
      margin: 30
    }
}))



const Breed = ({match}) => {

  const classes = useStyles();
  const [catBreed, setCatBreed] = React.useState({});
  const [values, setValues] = React.useState({});
  const [allComments, setAllComments] = React.useState([])


  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  }

  const deleteMessage = (id) => {
    axios.delete(`http://localhost:8080/comments/`+id)
     .then(response => {
       console.log(response);
     })
  }

  const refreshPage = () => {
    axios.get(`http://localhost:8080/comments`)
      .then(response => {
        setAllComments(response.data)
      })
  }

  const createComment = () => {
    axios.post(`http://localhost:8080/comments`,
      {
        body: values.message,
        author: values.author,
        breed_id: catBreed.id
      }
    )
    .then(response => {
      console.log(response);
    })
    refreshPage();
  }


React.useEffect(() => {
  axios.get(`http://localhost:8080/breeds/${match.params.id}`)
  .then(response => {

    setCatBreed(response.data)

  })
}, [match.params.id])

axios.get(`http://localhost:8080/comments`)
  .then(response => {
    setAllComments(response.data.filter(x => x.breed_id == match.params.id))
  })

  return (
    <div className = {classes.breed}>
      <h2 className = {classes.breed__name}>{catBreed.name}</h2>
      <img className = {classes.breed_img} src = {catBreed.img_url}/>
      <h2 className = {classes.description_title}>Personality and History</h2>
      <p className = {classes.description}>{catBreed.description}</p>
      <div className={classes.comment}>
        <h2>Maybe you want to tell us a funny facts about your {catBreed.name}?</h2>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="4"
            className={classes.textField__text}
            onChange={handleChange('message')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField__auth}
            onChange={handleChange('author')}
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" className={classes.button} onClick = {createComment}>
            Send
          </Button>
        </form>
        <div className={classes.allcomments}>
          {allComments.map(comment => {
            return(
              <div>
                <Paper className={classes.root}>
                <div className={classes.root__info}>
                  <Typography className={classes.root__text}variant="h5" component="h3">
                    {comment.body}
                  </Typography>
                  <Typography className={classes.root__author} component="p">
                  <p><span className={classes.root__author_span}>Author: </span>{comment.author}</p>
                  </Typography>
                </div>
                  <Button color="primary" className={classes.button_del} onClick={()=> deleteMessage(comment.id)}>
                    Delete
                  </Button>
                </Paper>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Breed;
