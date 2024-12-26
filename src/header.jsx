import FileRead from './FileRead';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

/* City class and functions
---------------------------------------- */
const City = class {
    constructor (city)
    {
        this.city = city;
        this.visible = true;
        this.temp;
        this.temp_min;
        this.temp_max;
        this.wind_speed;
        this.wind_deg;
        this.load_data();
    }
    // API call
    async load_data()
    {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${import.meta.env.VITE_API_KEY}`;
        console.log(queryURL);
        try {
            const response = await fetch(queryURL);
            if(!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            this.data = await response.json();

            if(this.data && this.data.main){
                this.temp = this.data.main.temp;
                this.temp_min = this.data.main.temp_min;
                this.temp_max = this.data.main.temp_max;
                this.wind_speed = this.data.wind.speed;
                this.wind_deg = this.data.wind.deg;
            }
        }
        catch (error){
            console.error("Failed to fetch weather data:", error);
        }
    }
};

// Header component
// --------------------------------------------------------------------
const Header = ({set_arr, reset}) =>
{
    const [city_hash, set_hash] = useState({});                             // Hashmap to prevent duplicate cities from being added to array
    const [city_val, set_val] = useState('');                               // used to retreive input

    // Get value from input
    const get_value = (val) => { set_val(val.target.value); }

    // Checks if city is already in hash and adds city  
    const add_new_city = () =>
    {
    if(!city_hash[city_val])                                                    // if city is not already in hash
        set_hash((prev_hash) => ({...prev_hash, [city_val] : true }));          // update hash with new hash with added value

        const new_city = new City(city_val);
        reset();
        set_arr((prev_arr) => [...prev_arr, new_city]);                         // update array with new array with added object
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
                <button onClick={add_new_city}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            </div>
        </header>
    </>
    );
}

export default Header;