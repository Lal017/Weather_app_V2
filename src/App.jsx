import './App.css';
import Header from './header.jsx';
import Side from './side.jsx';
import Body from './body.jsx';
import React, { useState } from 'react';

// returns all components above to display in the application
// ----------------------------------------------------------------------
function App() {
  const [side_arr, set_arr] = useState([]);                 // array that holds every new city added by user

  return (
    <>
    <Header side_arr = {side_arr} set_arr = {set_arr}/>
    <div className="main-container">
      <Side side_arr = {side_arr}/>
      <Body side_arr = {side_arr}/>
    </div>
    </>
  )
}

export default App;
