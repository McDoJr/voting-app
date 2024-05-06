import {courses, departments, signupForm, validateForm} from "../../components/data.js";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {popupForm} from "../../components/popup.jsx";
import PasswordViewer from "../../components/password-viewer.jsx";
import Logo from "../../assets/fsuu_logo.png";
import {errorForm} from "../../components/error.jsx";
import {HOST} from "../../hooks/auth-hooks.js";
import Loading from "../../components/loading.jsx";
import TermsAndCondition from "../../components/terms-and-condition.jsx";

const SignupForm = () => {

    const navigate = useNavigate();
    const [view, setView] = useState(false);
    const {popup, setPopup, handlePopup, getView, closePopup} = popupForm();
    const [passViewer, setPassViewer] = useState({
        password: false,
        confirm_password: false
    });
    const [loading, setLoading] = useState(false);

    const {errors, setErrors, checkErrors, getLabel, isVisible} = errorForm();

    const {formData, setFormData, handleChange: onChange} = signupForm();

    const handleChange = (e) => {
        onChange(e);
        checkErrors(e.target.name);
    }

    const handleAgreeAndClose = () => {
        document.getElementById("terms").checked = true;
        setView(false);
        setFormData({...formData, terms: true})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.terms) return;
        const errors = validateForm(formData);
        if(Object.keys(errors).length > 0) {
            setErrors(errors);
        }else {
            setErrors({});
            setLoading(true);
            axios.post(`${HOST}/signup`, {email: formData.email})
                .then(res => {
                    const {status, message} = res.data;
                    if(status) {
                        axios.post(`${HOST}/api/user/otp`, {email: formData.email})
                            .then(res => {
                                const {otp} = res.data;
                                navigate("/signup/otp", {state: {data: {...formData, otp}}});
                                setLoading(false);
                            })
                    }else{
                        handlePopup(true, false, message);
                        setTimeout(() => closePopup(), 1500);
                        setLoading(false);
                    }
                })
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col select-none justify-center items-center bg-white py-6 px-10 my-auto mx-auto">
                <img src={Logo} alt="Logo.png" className="w-24 mb-3"/>
                <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN UP</h1>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col relative">
                        {isVisible("student_id") && getLabel("student_id")}
                        <input type="text" placeholder="Student ID" name="student_id"
                               value={formData.student_id}
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 outline-1 ${isVisible("student_id") ? "border border-red-500" : "outline-dark-blue"}`}/>
                    </div>
                    <div className="w-full mr-3 flex flex-col relative">
                        {isVisible("firstname") && getLabel("firstname")}
                        <input type="text" placeholder="First Name" name="firstname"
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 mr-3 outline-1 ${isVisible("firstname") ? "border border-red-500" : "outline-dark-blue"}`}/>
                    </div>
                    <div className="w-full flex flex-col relative">
                        {isVisible("lastname") && getLabel("lastname")}
                        <input type="text" placeholder="Last Name" name="lastname"
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 outline-1 ${isVisible("lastname") ? "border border-red-500" : "outline-dark-blue"}`}/>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col relative">
                        {isVisible("department") && getLabel("department")}
                        <select name="department"
                                onChange={handleChange}
                                className={`w-full cursor-pointer border border-gray-400 px-4 py-1.5 text-sm ${formData.department ?  'text-black' : 'text-placeholder'} rounded-md mb-3 mr-3 outline-1 ${isVisible("department") ? "border border-red-500" : "outline-dark-blue"}`}>
                            <option hidden>Department</option>
                            {Object.keys(departments()).map((data, index) => {
                                return <option value={data} className="text-dark-blue" key={index}>{data}</option>;
                            })}
                        </select>
                    </div>
                    <div className="w-full mr-3 flex flex-col relative">
                        {isVisible("course") && getLabel("course")}
                        <select name="course"
                                onChange={handleChange}
                                className={`w-full border border-gray-400 px-4 py-1.5 text-sm ${formData.course ?  'text-black' : 'text-placeholder'} rounded-md mb-3 mr-3 outline-1 ${formData.department ? 'cursor-pointer' : 'pointer-events-none'} ${isVisible("course") ? "border border-red-500" : "outline-dark-blue"}`}>
                            <option hidden>Course</option>
                            {formData.department && courses(formData.department).map((data, index) => {
                                return <option value={data} className="text-dark-blue" key={index}>{data}</option>
                            })}
                        </select>
                    </div>
                    <div className="w-full flex flex-col relative">
                        {isVisible("year") && getLabel("year")}
                        <select name="year"
                                onChange={handleChange}
                                className={`w-full cursor-pointer border border-gray-400 px-4 py-1.5 text-sm ${formData.year ?  'text-black' : 'text-placeholder'} rounded-md mb-3 outline-1 ${isVisible("year") ? "border border-red-500" : "outline-dark-blue"}`}>
                            <option hidden>Year</option>
                            <option value="1" className="text-dark-blue">I</option>
                            <option value="2" className="text-dark-blue">II</option>
                            <option value="3" className="text-dark-blue">III</option>
                            <option value="4" className="text-dark-blue">IV</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col relative">
                        {isVisible("email") && getLabel("email")}
                        <input type="text" placeholder="GSuite Email" name="email"
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 outline-1 ${isVisible("email") ? "border border-red-500" : "outline-dark-blue"}`}/>
                    </div>
                    <div className="w-full mr-3 relative flex flex-col">
                        {isVisible("password") && getLabel("password")}
                        <input type={passViewer.password ? "text" : "password"} placeholder="Password" name="password"
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 outline-1 ${isVisible("password") ? "border border-red-500" : "outline-dark-blue"}`}/>
                        {formData.password && <PasswordViewer visible={passViewer} setVisible={setPassViewer} name="password"/>}
                    </div>
                    <div className="w-full relative flex flex-col">
                        {isVisible("confirm_password") && getLabel("confirm_password")}
                        <input type={passViewer.confirm_password ? "text" : "password"} placeholder="Confirm Password" name="confirm_password"
                               onChange={handleChange}
                               className={`w-full border border-gray-400 px-4 py-1.5 text-sm text-black rounded-md mb-3 outline-1 ${isVisible("confirm_password") ? "border border-red-500" : "outline-dark-blue"}`}/>
                        {formData.confirm_password && <PasswordViewer visible={passViewer} setVisible={setPassViewer} name="confirm_password"/>}
                    </div>
                </div>
                <div className="flex items-center self-start">
                    <input type="checkbox" className="text-sm mr-2" id="terms" name="terms" value={formData.terms} onChange={handleChange}/>
                    <label htmlFor="" className="text-[12px]">I agree to the <span className="text-[12px] text-blue-600 cursor-pointer underline" onClick={() => setView(true)}>Terms and Conditions</span></label>
                </div>
                <button
                    type="submit"
                    className={`py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue ${formData.terms ? "" : "pointer-events-none bg-dark-blue/60 border-dark-blue/5"}`}>SUBMIT
                </button>
                <p className="text-sm mt-1">Already have an account? <Link to="/signin" className="underline text-dark-blue">Sign In</Link></p>
            </form>
            {loading && <Loading />}
            {popup.state && getView()}
            {view && <TermsAndCondition setView={setView} handleAgreeAndClose={handleAgreeAndClose}/>}
        </>
    )
}
export default SignupForm;
