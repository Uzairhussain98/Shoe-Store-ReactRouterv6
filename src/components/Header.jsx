import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Link.css'
import {
    Link,
    } from 'react-router-dom';
import image from './logo1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <img src={image} alt='logo' style={{height: '50px' , width : '100px'}}/>
          {/* <Typography variant="h6" className={classes.title}>
            Nike Shoe Store
          </Typography> */}
          <Link style={{marginLeft:'810px'}} className={'plus'} to="/">Home</Link>
        <Link className={'plus'} to="/Store">Store</Link> 
        <Link className={'plus'} to="/About">About</Link> 
        <Link className={'plus'} to="/Cart"><ShoppingCartIcon /></Link> 


        
        </Toolbar>
      </AppBar>
    </div>
  );
}
