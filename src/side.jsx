// Side Component
// ----------------------------------------------------------------------
const Side = ({switch_vis, city_arr}) =>
{
    return (
    <>
    <div className = "side-bar">
        {city_arr.map((item, index) => (
            <div key = {index} onClick={() => switch_vis(item)}>
                <h2 className = "side-panel">{item.city}</h2>
            </div>
        ))}
    </div>
    </>
    );
}

export default Side;