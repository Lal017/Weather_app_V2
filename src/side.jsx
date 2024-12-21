// Side Component
// ----------------------------------------------------------------------
const Side = ({side_arr}) =>
{
    return (
    <>
    <div className = "side-bar">
        {side_arr.map((item, index) => ( <h2 key = {index} className = "side-panel">{item}</h2> ))}
    </div>
    </>
    )
}

export default Side;