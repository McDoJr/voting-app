import Success from "./success.jsx";
import Failed from "./failed.jsx";
import {useState} from "react";

export const popupForm = () => {
    const [popup, setPopup] = useState({
        state: false,
        status: false,
        message: ""
    });

    const closePopup = () => {
        handlePopup(false, false);
    }

    const handlePopup = (state, status, message = "") => {
        setPopup({state, status, message});
    }

    const getView = () => {
        const {status, message} = popup;
        return popup.status ? <Success message={message}/> : <Failed message={message}/>;
    }

    return {popup, setPopup, handlePopup, getView, closePopup};
}
