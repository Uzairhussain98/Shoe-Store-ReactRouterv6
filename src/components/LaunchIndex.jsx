import React from 'react'
import {
  Link,
  } from 'react-router-dom';
  import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Columns from 'react-columns';




const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginRight:10,
    marginBottom:10,
    marginLeft:10,
    border:'1px solid black'
  },
  media: {
    height: 300,
  },
});



 const LaunchIndex = () => {
  
  const classes = useStyles();


  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };






const LaunchI = (Object.entries(shoes).map(([slug , {name ,img }]) => {
  return(
      <div>
        <br/>
      <Card key={slug} className={classes.root}>
        <Link to={`/Store/${slug}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Nike Air Max 95 Premium adds a floral touch to its human body-inspired design. This icon mixes unbelievable comfort with head-turning style.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>

      <CardActions>

        <Button size="medium" variant="contained" color="primary" >
          Add to Cart
        </Button>
        <Link to={`/Store/${slug}`}>
        <Button size="medium" variant="outlined" color="primary">
          More Info
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
       )





    
       ;
      }));
      
  


  return (
    

<div>


<Columns>{LaunchI}</Columns>
  </div>
  ) ;
  }
  export default LaunchIndex