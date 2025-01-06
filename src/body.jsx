const Body = ({city_arr}) =>
{
    const calc_time = (time_offset) =>
    {
        const utc_time = new Date().getTime();
        const local_time = new Date(utc_time + (time_offset * 1000) + 28800000);
        return local_time.toLocaleString("en-US", {
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    }

    const calc_sun = (time, time_offset) =>
    {
        const date = new Date(time * 1000);
        date.setSeconds(date.getSeconds() + time_offset + 28800000);

        return date.toLocaleString("en-US", {
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    return(
        <>
            <div className="main-section">
                {city_arr.map((item, index) => (
                    item.visible ? (
                        item.is_err ? (
                            <div className="error-message">Error, invalid input. Please try again</div>
                        ) : (
                            <div className="main-panel" key={index} style={{ display: item.visible ? 'flex' : 'none' }}>
                        <div className="weather-title">
                            <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="Icon"/>
                            <div className="title-box">
                                <h2 className="city-title">{item.city}, {item.country}</h2>
                                <div className="weather-box">
                                    <p>{item.main}</p>
                                    <p>{item.temp}F</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="sub-title">Weather Information</h3>
                        <div className="weather-panel">
                            <div className="box">
                                <h3>Low / High</h3>
                                <hr />
                                <p>{item.temp_min} - {item.temp_max}</p>
                            </div>
                            <div className="box">
                                <h3>Wind</h3>
                                <hr/>
                                <p>{item.wind_speed} MPH</p>
                                <p>{item.wind_deg}°</p>
                            </div>
                            <div className="box">
                                <h3>Other</h3>
                                <hr />
                                <p>Pressure: {item.pressure} hPa</p>
                                <p>Humidity: {item.humidity}%</p>
                            </div>
                        </div>
                        <h3 className="sub-title">City Information</h3>
                        <div className="city-panel">
                            <div className="box">
                                <h3>Coordinates</h3>
                                <hr />
                                <p>Longitude: {item.lon}</p>
                                <p>Latitude: {item.lat}</p>
                            </div>
                            <div className="box">
                                <h3>Time</h3>
                                <hr />
                                <p>{calc_time(item.timezone)}</p>
                            </div>
                            <div className="box">
                                <h3>Sunrise / Sunset</h3>
                                <hr />
                                <p>{calc_sun(item.sunrise, item.timezone)} - {calc_sun(item.sunset, item.timezone)}</p>
                            </div>
                            <div className="box">
                                <h3>Surface Level</h3>
                                <hr />
                                <p>Sea - {item.sea} hPa</p>
                                <p>Ground - {item.ground} hPa</p>
                            </div>
                        </div>
                            </div>
                        )
                    ) : null
                ))}
            </div>
        </>
    );
}

export default Body;