import {form, signinForm, validateForm} from "../../components/data.js";
import axios from "axios";
import {Link} from "react-router-dom";
import {useState} from "react";
import {popupForm} from "../../components/popup.jsx";
import PasswordViewer from "../../components/password-viewer.jsx";
import Loading from "../../components/loading.jsx";
import {errorForm} from "../../components/error.jsx";
import Logo from "../../assets/fsuu_logo.png";
import {HOST} from "../../hooks/auth-hooks.js";

const SigninForm = () => {

    const {popup, setPopup, handlePopup, getView, closePopup} = popupForm();
    const [loading, setLoading] = useState(false);
    const [passViewer, setPassViewer] = useState({password: false});
    const {formData, setFormData, handleChange: onChange} = signinForm();
    const {errors, setErrors, checkErrors, getLabel, isVisible} = errorForm();

    const handleChange = (e) => {
        onChange(e);
        checkErrors(e.target.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if(Object.keys(errors).length > 0) {
            setErrors(errors);
        }else {
            setLoading(true);
            const {email, password} = formData;
            if(email === "admin") {
                if(password === "1234") {
                    handlePopup(true, true, "Login successfully!");
                    setTimeout(() => closePopup(), 1500);
                } else {
                    handlePopup(true, false, "Invalid admin password!");
                    setTimeout(() => closePopup(), 1500);
                }
            }else {
                axios.post(`${HOST}/login`, formData)
                    .then(res => {
                        const {status, data, message} = res.data;
                        if(status) {
                            handlePopup(true, true, message);
                            setTimeout(() => closePopup(), 1500);
                            axios.post(`${HOST}/api/user/otp`, formData)
                                .then(result => {
                                    console.log(result);
                                })
                        } else {
                            handlePopup(true, false, message);
                            setTimeout(() => closePopup(), 1500);
                        }
                        setLoading(false);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center bg-white py-6 px-16 my-auto">
                <img src={Logo} alt="Logo.png" className="w-24 mb-3"/>
                <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN IN</h1>
                <div className="w-full flex flex-col relative">
                    {isVisible("email") && getLabel("email")}
                    <input type="text" placeholder="Email Address" name="email"
                           onChange={handleChange}
                           className="w-[220px] border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                </div>
                <div className="w-full flex flex-col relative">
                    {isVisible("password") && getLabel("password")}
                    <input type={passViewer.password ? "text" : "password"} placeholder="Password" name="password"
                           onChange={handleChange}
                           className="w-[220px] border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                    {formData.password &&
                        <PasswordViewer visible={passViewer} setVisible={setPassViewer} name="password"/>}
                </div>
                <button
                    type="submit"
                    className="py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue">SUBMIT
                </button>
                <p className="text-sm mt-1">Don't have an account? <Link to="/signup"
                                                                         className="underline text-dark-blue">Sign
                    Up</Link></p>
            </form>
            {popup.state && getView()}
            {loading && <Loading />}
        </>
    )
}
export default SigninForm;
