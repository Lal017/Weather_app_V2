import FileRead from './FileRead';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

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
            <div className = 'title'>
            <h1>Weather App</h1>
            </div>
            <div className = 'search-bar'>
            <input type = "text" placeholder='search' onChange={get_value} list='search-bar'></input>
            <datalist id='search-bar'>
                {FileRead().map((city, index) => (<option value={city} key={index}/>))}
            </datalist>
            <div className = "magnifying-glass">
                <button onClick={add_city}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            </div>
        </header>
    </>
    );
}

export default Header;