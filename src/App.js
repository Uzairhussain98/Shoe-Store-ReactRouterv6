import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import LaunchIndex from './components/LaunchIndex'
import LaunchShoe from './components/LaunchShoe'
import Cart from './components/Cart'
import About from './components/About'






function App() {
  return (
    <Router>
      <Header/>

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Store" element={<Store/>} >
      <Route path="/" element={<LaunchIndex/>}/>
      <Route path=":slug" element={<LaunchShoe/>}/>



</Route>

<Route path="Cart" element={<Cart/>}/>
<Route path="About" element={<About/>}/>


    {/* <Route path="*" element={<NotFound/>}/> */}
   </Routes>
  </Router>
    

   
    
  );
}

export default App;
