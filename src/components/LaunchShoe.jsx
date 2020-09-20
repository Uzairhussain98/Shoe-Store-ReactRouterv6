import React from 'react'
import {
    useParams,
    } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const LaunchShoe = () => {
  const[{basket }, dispatch] = useStateValue();

    const { slug } = useParams();
    const shoe = shoes[slug]
    const classes = useStyles();


  const addToBasket =() => {
    dispatch
    ({
      type: 'ADD_TO_BASKET',
      item: {
          id:id,
          name: name,
          image: img,
         
      }
  })
  };
  console.log(basket)




    if(!shoe){
        return(
        <h1>Not Found</h1>
         ) }

         const {name , img, id} = shoe;

      return(
      <div >
        <Grid container spacing={2}>

        <Grid item xs={6}>
        <Paper  className={classes.root} elevation={3} style={{ textAlign:"center" ,height:'603px',marginLeft:'10px', marginTop:'20px' , marginBottom : '10px'}}>
        <Typography variant="h3">{name}</Typography>
        <br/>
        <Typography variant="h6" gutterBottom>Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.
        </Typography>
<br/>
<br/>
<Typography variant="h5"> Colour Shown: White/Black/Wolf Grey </Typography>
<br/>
<Typography variant="h5"> Style: 921826-101 </Typography>

<Button onClick={addToBasket} style={{width:'150px', height:'50px', marginTop:'50px'}} variant="contained" color="primary">
  Add To Cart
</Button>
        </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.root} style={{marginRight:'10px', marginTop:'20px' , marginBottom : '10px'}}>
        <img src={img} alt={name} style={{height:'600px' , width:'100%'}}  />
        </Paper>
        </Grid>
       
        </Grid>

      </div>



      )}



export default LaunchShoe


const shoes = {
  "air-jordan-3-valor-blue": {
    id : '001',
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    id : '002',

    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    id : '003',

    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};



