import React from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
     <Grid container spacing={3}>
          <Grid item xs={6}>
            <div>Hello From1 </div>
          </Grid>
        <Grid item xs={6}>
          <div>Hello From2 </div>
        </Grid>

     </Grid>
    </div>
  )
}

export default Home
