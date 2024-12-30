// Side Component
// ----------------------------------------------------------------------
const Side = ({city_arr}) =>
{

    return (
    <>
    <div className = "side-bar">
        {city_arr.map((item, index) => (
            <div key = {index}>
                <h2 className = "side-panel">{item.city}</h2>
            </div>
        ))}
    </div>
    </>
    );
}

export default Side;