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

import catinfo1 from '../images/catinfo1.jpg'
import catinfo2 from '../images/catinfo2.jpg'
import catinfo3 from '../images/catinfo3.jpg'


const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 30,
  },
  input: {
    display: 'none',
  },
  main: {
    width: '80%',
    backgroundColor: 'white',
    margin: '0 auto',
    marginTop: 20,
    padding: 50,
    paddingTop: 20,
    lineHeight: 1.5,
    zIndex: 2,
    boxSizing: 'border-box'
  },
  main__categories: {
    display: 'flex'
  },
  card: {
    maxWidth: 345,
    margin: 5
  },
  input: {
    display: 'none',
  },
  main__info__par:{
    color: '#323232',
    textAlign: 'left'
  },
  main__cat_img: {
    width: '80%'
  },
  main__title: {
    fontSize: 30
  },
  card__cat_name: {
    fontSize: 18
  },
  main__info__title: {
    marginTop: 30
  }
}));

const setCategory = () => {
  axios.post(`http://localhost:8080/breeds`,
   {
     img_url: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/egyptian-mau-detail.jpg?bust=1535567005&width=630',
     name: 'Egyptian Mau',
     description:`While some people might at first be attracted to the Egyptian Mau’s beautiful spotted coat, most become fans due to the breed’s temperament and personality. Maus, like their ancestors that were invited along on the duck hunts of their Egyptian companions, love to fetch. In fact, they love any play activity that mimics hunting behavior. Indoor-only Maus, the only kind recommended by most enthusiasts, will sometimes leave gifts of well-killed catnip mice on the pillows of their favorite people. Be sure to give your Mau lots of pettings and praise, and perhaps a treat or two, for these presents; Maus will be upset, and quite confused, if their generous gifts are coldly rejected. While not overly talkative, Maus will let their humans know if something is amiss, particularly if that something concerns food dishes. Their voices are usually melodious and quiet. When engaged in conversation with their human companions, Maus wag their tails, tread with their feet, and make a variety of sounds that fanciers call “chortling.” Maus are devoted to the humans who pay them the proper homage. If you show your Mau you can be trusted, your Mau will shower you with love and loyalty. They are fiercely loyal cats who generally don’t take to strangers. Once they bond with their preferred persons, they want to be worshipped by their chosen family rather than by the entire human race.`,
     category_id: 2
   }
)
.then(response => {
  console.log(response);
})}

const showCategory = () => {
  axios.get(`http://localhost:8080/breeds`)
   .then(response => {
     console.log(response);
   })
}





export default function Main() {
  const classes = useStyles();

  const [catCategories, setCategories] = React.useState([]);


  React.useEffect(() => {
    axios.get(`http://localhost:8080/categories`)
    .then(response => {
      console.log(response.data);
      setCategories(response.data)
    })
  }, [])

  return (
    <main className={classes.main}>
    <h2 className={classes.main__title}>Find the Right Cat Breed for You</h2>
      <div className={classes.main__categories}>
        {catCategories.map(category => {
          return(
            <Card className={classes.card} key={catCategories.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={category.img_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className={classes.card__cat_name} gutterBottom variant="h5" component="h2">
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={`/category/${category.id}`}>
            Watch More
          </Button>
        </CardActions>
      </Card>
          )
        })}
      </div>

      <Button variant="contained" color="primary" className={classes.button} component={Link} to={`/breeds/`}>
        Show all breeds
      </Button>


      <div className={classes.main__info}>
        <h2 className={classes.main__info__title}>Want to make your cat happier? Here are some things you can do right now to make your feline feel blissful.</h2>
        <p className={classes.main__info__par}>Cats are wonderful creatures. When we understand them, we can use that information to make them happier. Here are five things to do for your cat today – and a bonus one to work on over time.</p>
        <p className={classes.main__info__par}><h2 className={classes.main__info__title}>1. Make time to play with your cat</h2>
          11% of cats have no toys, according to one study (Howell et al 2016).
          But the average cat has 7 toys, and toy mice are the most popular. (Strickler and Shull 2014)
          Even if your cat has lots of toys of their own, they still like it when their human plays with them. 64% of the owners in Strickler and Shull’s study played with their cat twice a day, but playtime typically lasted 5 or 10 minutes. Amongst people who played with their cat for at least 5 minutes instead of just 1 minute, there were fewer behaviour problems.
          But your cat would probably like an even longer play time.
          Have you ever felt that when you are moving a toy for your cat, they seem to be hunting it? This is because play satisfies the cat’s predatory instincts.
          John Bradshaw PhD, author of Cat Sense and other best-selling books on pets, told NPR that “The research that we've done suggests that [play] it's almost indistinguishable, that everything that a cat does when it's playing seems to be a part of its normal hunting behavior.”
          So when a cat plays, it’s not so much about the cat being sociable with you, it’s really about hunting.
          This means they like toys that are like prey in some way – maybe they are furry or have feathers or are mouse-sized or squeak like a mouse or are long so the cat can kick their back legs against it. And cats would like you to move it as if it is real prey for them to chase.
          So make time to play with your cat!
        </p>
        <img className={classes.main__cat_img} src={catinfo1} alt='cat'/>
        <p className={classes.main__info__par}><h2 className={classes.main__info__title}>2. Give your cat a food toy</h2>
          Another way to engage your cat’s hunting instinct is through the use of food toys. These provide valuable enrichment to our feline friends.
          There are many food toys available, including balls with holes in that the cat has to roll to make treats fall out, the mouse-shaped no bowl, containers that have to be tipped like the Trixie Mad Scientist, and things the cat has to paw at to get the treats out like the Trixie 5-in-1 Activity Center.
          There are food toys for every level of feline ability. If your cat is new to food toys, start with something easy so they don’t get frustrated trying to get at the food. You may also need to use particularly tasty treats to get their interest. Over time, you can make the toys more difficult, and use them to feed all meals instead of providing ‘free’ food in a bowl.
          You can also hide the toys around the house so the cat has to hunt for them to get started.
          </p>
        <img className={classes.main__cat_img} src={catinfo2} alt='cat'/>
        <p className={classes.main__info__par}><h2 className={classes.main__info__title}>3. Make sure your cat has nice hiding places</h2>
          As well as thinking about cats evolving as solitary hunters of prey, we have to remember that cats themselves are prey animals. Which means cats like places they can hide and feel safe.
          This is especially important if you have a fearful cat – the kind that runs to hide when people come over to the house.
          But all cats need places to hide. In fact, a recent study of shelter cats’ use of a hiding box and a separate perch found the hiding box was much preferred, so much so that it may be considered a basic need for cats (Ellis et al 2017b).
          The kind of hiding place that cats prefer is cat-sized, secluded, and often high up from the ground. It’s a place in which they can feel safe.
          Examples of safe hiding places include a cardboard box (e.g. a regular cardboard box laying on its side, or a box specially designed for cats), a perch with a lip or a box to go in on a cat tree, a cat cube or cocoon (many types are available commercially), the cat carrier (if the cat likes it), a space on a shelf, or in a cupboard or wardrobe where the cat has access.
          </p>
        <p className={classes.main__info__par}><h2 className={classes.main__info__title}>4. Use scents as enrichment</h2>
          Did you know that your cat has an amazing nose, and on top of that they also have a vomeronasal organ that detects pheromones – chemical signals that have meaning to cats? This means that scent is far more important in your cat’s life than you realize.
          When your cat rubs its head on you or the furniture, it is leaving pheromones behind. You may even notice a little brown mark on the wall where your cat rubs often. Don’t clean it up! Or at least don’t clean all of them up at once. Those familiar chemical signals that the cat is depositing help them to feel safe and secure.
          Everyone is familiar with catnip toys, but there are other scents that many cats like too, so you could try valerian, silver vine or honeysuckle and see if your cat responds to those. Almost all cats will visibly respond to at least one of these scents.
          </p>
        <img className={classes.main__cat_img} src={catinfo3} alt='cat'/>
        <p className={classes.main__info__par}><h2 className={classes.main__info__title}>5. Clean the litter tray</h2>
          Did you notice how I saved the most glamorous one til last?!!
          I know what you're thinking. The other four are all fun, and this one... not so much.
          But the litter tray is a serious matter for cats. Many house-soiling issues are due to problems with the litter tray (but if your cat suddenly starts making a mess in the house, it’s important to see a vet in case a medical issue is the cause). It’s an important issue because inappropriate toileting behaviour is a common reason for cats to be surrendered to animal shelters.
          26% of pet cat owners clean their litter box once a day, but 11% only clean it once a week and 5% less frequently than that (Howell et al 2016). So there is plenty of scope for improvement amongst the average cat owner. And it really doesn't take long.
        </p>
      </div>
    </main>
  )
}
