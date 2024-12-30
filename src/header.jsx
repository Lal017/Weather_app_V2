import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

/* City class and functions
---------------------------------------- */
const City = class {
    constructor (city, set_arr)
    {
        this.city = city;
        this.main;
        this.description;
        this.icon;
        this.temp;
        this.temp_min;
        this.temp_max;
        this.wind_speed;
        this.wind_deg;
        this.pressure;
        this.humidity;

        this.lat;
        this.lon;
        this.sea;
        this.ground;

        this.visible = true;
        this.set_arr = set_arr;
        this.load_data();
    }
    // API call
    async load_data()
    {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${import.meta.env.VITE_API_KEY}&units=imperial`;
        try {
            const response = await fetch(queryURL);
            if(!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            this.data = await response.json();

            if(this.data && this.data.main){
                this.main = this.data.weather[0].main;
                this.description = this.data.weather[0].description;
                this.icon = this.data.weather[0].icon;

                this.temp = this.data.main.temp;
                this.feel = this.data.main.feels_like;
                this.temp_min = this.data.main.temp_min;
                this.temp_max = this.data.main.temp_max;
                this.wind_speed = this.data.wind.speed;
                this.wind_deg = this.data.wind.deg;
                this.humidity = this.data.main.humidity;
                this.pressure = this.data.main.pressure;

                this.lon = this.data.coord.lon;
                this.lat = this.data.coord.lat;
                this.sea = this.data.main.sea_level;
                this.ground = this.data.main.grnd_level;
                this.sunrise = this.data.sys.sunrise;
                this.sunset = this.data.sys.sunset;
                this.timezone = this.data.timezone;
                this.country = this.data.sys.country;
            }

            this.set_arr((prev) => [...prev]);                           // re-render state
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

        const new_city = new City(city_val, set_arr);
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
            <input type = "text" placeholder='search' onChange={get_value}></input>
            <div className = "magnifying-glass">
                <button onClick={add_new_city}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            </div>
        </header>
    </>
    );
}

export default Header;