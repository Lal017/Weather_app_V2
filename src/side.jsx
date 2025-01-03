import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// Side Component
// ----------------------------------------------------------------------
const Side = ({switch_vis, city_arr, set_arr}) =>
{
    const close = (delete_item) =>
    {
        set_arr((prev) => prev.filter(item => item.city !== delete_item.city))
    }
    return (
    <>
    <div className = "side-bar">
        {city_arr.map((item, index) => (
            <div key = {index} onClick={() => switch_vis(item)}>
                <div className = "side-panel">
                    <div className="delete-button" onClick={() => close(item)}>
                        <FontAwesomeIcon icon={faCircleXmark} id="x-icon"></FontAwesomeIcon>
                    </div>
                    <h2>{item.city}</h2>
                </div>
            </div>
        ))}
    </div>
    </>
    );
}

export default Side;