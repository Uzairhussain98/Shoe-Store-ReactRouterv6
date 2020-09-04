import React from 'react'
import image from './GitHub.png'
import './About.css'



const About = () => {
  return (
    <div className='abt'>
    <h1 style={{fontSize:'50px'}}>Made By Uzair Hussain</h1>  

    <hr /> 
    
    <br/>  <br/>  <br/>   
    <a href="https://github.com/Uzairhussain98"  target="_blank" rel="noopener noreferrer">
      <img src={image} alt='github'/>

    </a>
    <br/>
    <a style={{fontSize:'25px'}} href="https://github.com/Uzairhussain98" 
    target="_blank"  rel="noopener noreferrer">Visit Github Profile </a>
  </div>
  )
}

export default About;
