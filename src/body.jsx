const City = class {
    constructor (city, visible)
    {
        this.city = city;
        this.visible = visible;

        // city info down here
    }
}

var city_arr = [];

/* Reset all visible values in array to false */
const reset = () =>
{
    var length = city_arr.length;
    for(let i = 0; i < length; i++)
    {
        city_arr[i].visible = false;
    }
}

const add_main_content = (city_val) =>
{
    console.log(city_val);
    const new_city = new City();
    new_city.city = city_val;
    reset();
    new_city.visible = true;
    city_arr.push(new_city);
    console.log(city_arr);
}

const Body = () =>
{
    return(
        <>
            <div className="main-section">
                {city_arr.map((item, index) => (
                    <div className="main-panel" key={index} style={{ display: item.visible ? 'flex' : 'none' }}>
                        <h2 className="city-title">{item.city}</h2>
                        <div className="weather-panel">
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
export { add_main_content };