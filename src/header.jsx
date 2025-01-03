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

        this.visible = false;
        this.set_arr = set_arr;
        this.is_err;
        this.load_data(city);
    }
    // API call
    async load_data(city)
    {
        const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${import.meta.env.VITE_API_KEY}&units=imperial`;
        
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(queryURL);
                if(!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();

                if(data && data.main){
                    this.main = data.weather[0].main;
                    this.description = data.weather[0].description;
                    this.icon = data.weather[0].icon;

                    this.city = data.name;
                    this.temp = data.main.temp;
                    this.feel = data.main.feels_like;
                    this.temp_min = data.main.temp_min;
                    this.temp_max = data.main.temp_max;
                    this.wind_speed = data.wind.speed;
                    this.wind_deg = data.wind.deg;
                    this.humidity = data.main.humidity;
                    this.pressure = data.main.pressure;

                    this.lon = data.coord.lon;
                    this.lat = data.coord.lat;
                    this.sea = data.main.sea_level;
                    this.ground = data.main.grnd_level;
                    this.sunrise = data.sys.sunrise;
                    this.sunset = data.sys.sunset;
                    this.timezone = data.timezone;
                    this.country = data.sys.country;
                    this.is_err = false;
                }

                this.set_arr((prev) => [...prev]);                           // re-render state
            }
            catch (error){
                console.error("Failed to fetch weather data:", error);
                this.is_err = true;
                this.set_arr((prev) => [...prev]);
            }
            finally {
                resolve();
            }
        })
    }
};

// Header component
// --------------------------------------------------------------------
const Header = ({set_arr, switch_vis}) =>
{
    const [city_hash, set_hash] = useState({});                             // Hashmap to prevent duplicate cities from being added to array
    const [city_val, set_val] = useState('');                               // used to retreive input

    // Get value from input
    const get_value = (val) => { set_val(val.target.value); }

    // Checks if city is already in hash and adds city  
    const add_new_city = async () =>
    {
        if(!city_hash[city_val])
        {                                                    // if city is not already in hash
            set_hash((prev_hash) => ({...prev_hash, [city_val] : true }));          // update hash with new hash with added value

            const new_city = new City(city_val, set_arr);
            set_arr((prev_arr) => [...prev_arr, new_city]);                         // update array with new array with added object
            
            await new_city.load_data();
            switch_vis(new_city);
        }
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
                    <button onClick={add_new_city}><FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
            </div>
        </header>
    </>
    );
}

export default Header;