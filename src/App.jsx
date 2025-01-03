import './App.css';
import Header from './header.jsx';
import Side from './side.jsx';
import Body from './body.jsx';
import React, { useState } from 'react';

function App() {
  const [city_arr, set_arr] = useState([]);                 // array of objects that holds every new city added by user

  /* set item to visible and the rest to no visible */
  const switch_vis = (selected_item) =>
  {
    set_arr((prev) => {
      console.log("prev:", prev);
      const updated = prev.map((item) => ({
        ...item,
        visible : item.city === selected_item.city,
      }))
      console.log("output: ", updated);
      return updated;
    });
  };

  return (
    <>
    <Header set_arr = {set_arr} switch_vis = {switch_vis}/>
    <div className="main-container">
      <Side switch_vis = {switch_vis} city_arr = {city_arr} set_arr = {set_arr}/>
      <Body city_arr = {city_arr}/>
    </div>
    </>
  )
}

export default App;