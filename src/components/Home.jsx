import React from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from './sh2.png'
import Typography from '@material-ui/core/Typography';


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



const Home = () => {
  const classes = useStyles();


  return (
    <div className='home'>
     <Grid container spacing={0}>
          <Grid item xs={6}>
            <div style={{textAlign:'center'}}>
              <img style={{marginTop:'-20px' , height:'650px' , width:'700px'}} src={image} alt='shoe'/>
               </div>
          </Grid>
        <Grid item xs={6}>
          <div style={{textAlign:'center'}}>
          <Typography style={{fontFamily :'Syne' , marginTop: '80px'}} variant="h2"  gutterBottom>
        Welcome To ! 
      </Typography>
          <Typography style={{fontFamily :'Syne' , marginTop: '-20px'}} variant="h2"  gutterBottom>
        Nike Shoe Store
      </Typography>
      <Typography style={{marginRight:'20px', textAlign:'center'}} variant="h6" gutterBottom>
      If you loved to wear luxury brand footwear then you are in right place to getting versatile
     and chic Nike shoes in Pakistan. Now brighten up your look with this quick and elegant footwear. 
     Welcome to shoesonline.com the only online store which is manufactured all types of Nike shoes for
     men and women.
       </Typography>


          </div>
        </Grid>

     </Grid>
    </div>
  )
}

export default Home
