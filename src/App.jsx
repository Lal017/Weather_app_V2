import './App.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import FileRead from './FileRead';

// Header component
// --------------------------------------------------------------------
const Header = ({side_arr, set_arr}) =>
{
  const [city_val, set_val] = useState('');

  // Get value from input
  const get_value = (val) =>
  {
    set_val(val.target.value);
  }

  // Add city to side array
  const add_city = () =>
  {
    if(!side_arr.includes(city_val))                          // if city is not already in array
      set_arr((prev_city) => [...prev_city, city_val]);       // update array with new array with added value
  }

  return (
    <>
      <header>
          <div class = 'title'>
            <h1>Weather App</h1>
          </div>
          <div class = 'search-bar'>
            <input type = "text" placeholder='search' onChange={get_value} list='search-bar'></input>
            <datalist id='search-bar'>
              {FileRead().map((city, index) => (<option value={city} key={index}/>))}
            </datalist>
            <div class = "magnifying-glass">
              <button onClick={add_city}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
          </div>
      </header>
    </>
  );
}

// Main Component
// ----------------------------------------------------------------------
const Main = ({side_arr}) =>
{
  return (
    <>
    <div class = "side-bar">
      {side_arr.map((item, index) => ( <h2 key = {index} class = "side-panel">{item}</h2> ))}
    </div>
    <div class = "main-section">
    </div>
    </>
  )
}

// returns all components above to display in the application
// ----------------------------------------------------------------------
function App() {
  const [side_arr, set_arr] = useState([]);                 // array that holds every new city added by user

  return (
    <>
    <Header side_arr = {side_arr} set_arr = {set_arr}/>
    <Main side_arr = {side_arr}/>
    </>
  )
}

export default App
