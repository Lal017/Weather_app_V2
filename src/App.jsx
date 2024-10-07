import './App.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

// Holds all the cities added to the side panel
const side_arr = [];

// Header component
// --------------------------------------------------------------------
const Header = () =>
{
  let city_val;
  // Get value from input
  const get_value = (val) =>
  {
    city_val = val.target.value;
  }

  // Add city to side array
  const add_city = () =>
  {
    side_arr.push(city_val);
    console.log(side_arr);
  }

  return (
    <>
      <header>
          <div class = 'title'>
            <h1>Weather App</h1>
          </div>
          <div class = 'search-bar'>
            <input type = "text" placeholder='search' onChange={get_value}></input>
            <div class = "magnifying-glass">
              <button onClick={add_city}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
          </div>
      </header>
    </>
  )
}

// Main Component
// ----------------------------------------------------------------------
const Main = () =>
{
/*   const arr_map = side_arr.map((item) =>
    <div class = "panel" key={side_arr.length}>{item}</div>
  ) */

  return (
    <>
    <div class = "side-panel">
    </div>
    <div class = "main-panel">
    </div>
    </>
  )
}

// returns all components above to display in the application
// ----------------------------------------------------------------------
function App() {
  return (
    <>
    <Header/>
    <Main/>
    </>
  )
}

export default App
