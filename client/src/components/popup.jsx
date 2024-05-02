import Success from "./success.jsx";
import Failed from "./failed.jsx";

const Popup = ({data}) => {
    return data.status ? <Success/> : <Failed/>
}
export default Popup;
