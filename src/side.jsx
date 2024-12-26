// Side Component
// ----------------------------------------------------------------------
const Side = ({city_arr, reset}) =>
{

    return (
    <>
    <div className = "side-bar">
        {city_arr.map((item, index) => (
            <div onClick={item.switch}>
                <h2 key = {index} className = "side-panel">{item.city}</h2>
            </div>
        ))}
    </div>
    </>
    );
}

export default Side;