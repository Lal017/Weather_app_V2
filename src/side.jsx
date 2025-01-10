import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// Side Component
// ----------------------------------------------------------------------
const Side = ({switch_vis, city_arr, set_arr}) =>
{
    const close = (delete_item) =>
    {
        var is_vis = false;
        if(delete_item.visible) { is_vis = true; }
        set_arr((prev) => {
            const updatedArray = prev.filter((item) => item.city !== delete_item.city);
        if(is_vis && updatedArray.length > 0)
            { switch_vis(city_arr[0]); }
        return updatedArray;
        });
    };

    return (
    <>
    <div className = "side-bar">
        {city_arr.map((item, index) => (
            <div key = {index} onClick={() => switch_vis(item)}>
                <div className = "side-panel">
                    <div className="delete-button" onClick={() => close(item)}>
                        <FontAwesomeIcon icon={faCircleXmark} id="x-icon"></FontAwesomeIcon>
                    </div>
                    <h3>{item.city}</h3>
                </div>
            </div>
        ))}
    </div>
    </>
    );
}

export default Side;