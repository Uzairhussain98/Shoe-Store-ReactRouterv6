import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams
} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Store from './components/Store'
import LaunchIndex from './components/LaunchIndex'




function App() {
  return (
    <Router>
      <Header/>

<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="Store" element={<Store/>} >
      <Route path="/" element={<LaunchIndex/>}/>
      {/* <Route path=":slug" element={<LaunchShoe/>}/> */}


</Route>
    {/* <Route path="*" element={<NotFound/>}/> */}
   </Routes>
  </Router>
    

   
    
  );
}

export default App;
