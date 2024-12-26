const Body = ({city_arr}) =>
{
    return(
        <>
            <div className="main-section">
                {city_arr.map((item, index) => (
                    <div className="main-panel" key={index} style={{ display: item.visible ? 'flex' : 'none' }}>
                        <h2 className="city-title">{item.city}</h2>
                        <div className="weather-panel">
                            <div className="weather-box">
                                {item.temp}
                            </div>
                        </div>
                        <div className="city-panel">
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Body;