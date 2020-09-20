import React  from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid';
import image from './sh2.png'
import Typography from '@material-ui/core/Typography';
import useWebAnimations , {backInLeft } from "@wellyshen/use-web-animations";





const Home = () => {

  const { ref } = useWebAnimations({...backInLeft});



  return (
    <div className='home'> 
     <Grid container spacing={0}>
          <Grid item xs={6} sm={6}>
            <div ref={ref} style={{textAlign:'center'}}>
              <img  style={{marginTop:'-20px' , height:'650px' , width:'700px'}} src={image} alt='shoe'/>
               </div>
          </Grid>
        <Grid item xs={6} sm={6}>
          <div style={{textAlign:'center'}}>
          <Typography  style={{fontFamily :'Syne' , marginTop: '80px'}} variant="h2"  gutterBottom>
        Welcome To ! 
      </Typography>
          <Typography style={{fontFamily :'Syne' , marginTop: '-20px'}} variant="h2"  gutterBottom>
        Nike Shoe Store
      </Typography>
      <Typography style={{marginRight:'20px', textAlign:'center'}} variant="h6" gutterBottom>
      If you loved to wear luxury brand footwear then you are in right place to getting versatile
     and chic Nike shoes in Pakistan. Now brighten up your look with this quick and elegant footwear. 
     Welcome to nike.surge.sh the only online store which is manufactured all types of Nike shoes for
     men and women.
       </Typography>


          </div>
        </Grid>

     </Grid>
    </div>
  )
}

export default Home
