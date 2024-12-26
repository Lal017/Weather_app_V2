import './App.css';
import Header from './header.jsx';
import Side from './side.jsx';
import Body from './body.jsx';
import React, { useState } from 'react';

function App() {
  const [city_arr, set_arr] = useState([]);                 // array of objects that holds every new city added by user

  /* Reset all visible values in array to false */
  const reset = () =>
  {
    var length = city_arr.length;
    for(let i = 0; i < length; i++)
    {
        city_arr[i].visible = false;
    }
  }

  return (
    <>
    <Header set_arr = {set_arr} reset = {reset}/>
    <div className="main-container">
      <Side city_arr = {city_arr} reset = {reset}/>
      <Body city_arr = {city_arr}/>
    </div>
    </>
  )
}

export default App;