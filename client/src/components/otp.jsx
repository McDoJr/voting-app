import {form} from "./data.js";
import Logo from "../assets/fsuu_logo.png";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {HOST} from "../hooks/auth-hooks.js";
import {popupForm} from "./popup.jsx";

const Otp = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {popup, setPopup, handlePopup, getView, closePopup} = popupForm();
    const {formData, setFormData} = form({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    });

    const signupData = location.state.data;

    const onKeyDown = (e, index) => {
        if(e.key === "Backspace") {
            const data = e.target.value;
            const other = `${index > 0 ? index - 1 : index}`;
            const value = data ? data[data.length-1] : data;
            if(!value) document.getElementById(other).focus();
        }
    }

    const onChange = (e, index) => {
        const data = e.target.value;
        if(data && !/[0-9]/.test(data[data.length - 1])) {
            return
        }
        const value = data ? data[data.length-1] : data;
        const other = index + 1;
        if(!formData[index]) {
            if(index < 5) document.getElementById(other).focus();
        }
        setFormData({...formData, [index]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(signupData.otp !== Object.values(formData).join("")) {
            handlePopup(true, false, `Invalid OPT`);
            setTimeout(() => closePopup(), 1500);
            return;
        }
        axios.post(`${HOST}/register`, signupData)
            .then(res => {
                const {status, message} = res.data;
                if(status) {
                    handlePopup(true, true, message);
                    setTimeout(() => {
                        closePopup();
                        navigate("/signin");
                    }, 1500);
                } else {
                    handlePopup(true, false, message);
                    setTimeout(() => closePopup(), 1500);
                }
            })
            .catch(console.log);
    }

    return (
        <>
            <form action=""
                  onSubmit={handleSubmit}
                  className="py-6 px-16 rounded-md shadow-lg shadow-gray-700 flex flex-col items-center relative">
                {/*<img src={Logo} alt="Logo.png" className="w-24 mb-3"/>*/}
                <FaArrowLeftLong
                    onClick={() => navigate("/signup")}
                    className="absolute left-3 top-3 w-8 h-6 text-dark-blue cursor-pointer"/>
                <h1 className="text-3xl font-bold text-dark-blue mb-6">OTP</h1>
                <div>
                    {Object.keys(formData).map((key, index) => {
                        return <input type="text"
                                      className="w-8 h-8 text-[18px] border border-gray-400 text-center mx-1 outline-dark-blue rounded-[3px]"
                                      key={index}
                                      id={`${index}`}
                                      name={`${index}`}
                                      value={formData[index]}
                                      onKeyDown={(e) => onKeyDown(e, index)}
                                      onChange={(e) => onChange(e, index)}
                        />
                    })}
                </div>
                <button
                    type="submit"
                    className={`py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue ${Object.values(formData).every(data => data) ? "" : "pointer-events-none bg-dark-blue/60 border-dark-blue/5"}`}>VERIFY
                </button>
            </form>
            {popup.state && getView()}
        </>
    )
}
export default Otp;
