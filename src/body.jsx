const Body = ({city_arr}) =>
{
    return(
        <>
            <div className="main-section">
                {city_arr.map((item, index) => (
                    <div className="main-panel" key={index} style={{ display: item.visible ? 'flex' : 'none' }}>
                        <div className="weather-title">
                            <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="Icon"/>
                            <div className="title-box">
                                <h2 className="city-title">{item.city}</h2>
                                <div className="weather-box">
                                    <p>{item.main}</p>
                                    <p>{item.temp}F</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="sub-title">Weather Information</h3>
                        <div className="weather-panel">
                            <div className="weather-box">
                                <h3>Low / High</h3>
                                <hr />
                                <p>{item.temp_min} - {item.temp_max}</p>
                            </div>
                            <div className="weather-box">
                                <h3>Wind</h3>
                                <hr/>
                                <p>{item.wind_speed} MPH</p>
                                <p>{item.wind_deg}°</p>
                            </div>
                            <div className="weather-box">
                                <h3>Other</h3>
                                <hr />
                                <p>Pressure: {item.pressure} hPa</p>
                                <p>Humidity: {item.humidity}%</p>
                            </div>
                        </div>
                        <h3 className="sub-title">City Information</h3>
                        <div className="city-panel">
                            <div className="weather-box">
                                <h3>Coordinates</h3>
                                <hr />
                                <p>Longitude: {item.lon}</p>
                                <p>Latitude: {item.lat}</p>
                            </div>
                            <div className="weather-box">
                                <h3>Surface Level</h3>
                                <hr />
                                <p>Sea - {item.sea}</p>
                                <p>Ground - {item.ground}</p>
                            </div>
                            <div className="weather-box">
                                <h3>Other</h3>
                                <hr />
                                <p>Country: {item.country}</p>
                                <p>Timezone: {item.timezone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Body;