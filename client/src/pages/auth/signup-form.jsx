import {courses, signupForm, validate, validateForm} from "../../components/data.js";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import Popup from "../../components/popup.jsx";
import PasswordViewer from "../../components/password-viewer.jsx";
import Logo from "../../assets/fsuu_logo.png";

const SignupForm = () => {

    const navigate = useNavigate();
    const [popup, setPopup] = useState({
        state: false,
        status: false
    });
    const [passA, setPassA] = useState(false);
    const [passB, setPassB] = useState(false);
    // const {formData: errors, setFormData: setErrors} = signupForm();
    const [errors, setErrors] = useState({});
    const {formData, setFormData, handleChange} = signupForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if(Object.keys(errors).length > 0) {
            setErrors(errors);
        }else {
            setErrors({});
            axios.post('http://localhost:8081/register', formData)
                .then(res => {
                    if(res.data) {
                        setPopup({state: true, status: true});
                        setTimeout(() => {
                            setPopup({state: false, status: false});
                            navigate("/signin");
                        }, 1500);
                    } else {
                        setPopup({state: true, status: false});
                        setTimeout(() => setPopup({state: false, status: false}), 1500);
                    }
                })
                .catch(console.log);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col select-none justify-center items-center bg-white py-6 px-10 my-auto rounded-md shadow-lg shadow-gray-700">
                <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN UP</h1>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">ss</label>
                        <input type="text" placeholder="Student ID" name="student_id"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-1 outline-1 outline-dark-blue"/>
                    </div>
                    <div className="w-full mr-3 flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <input type="text" placeholder="First Name" name="firstname"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-1 mr-3 outline-1 outline-dark-blue"/>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <input type="text" placeholder="Last Name" name="lastname"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-1 outline-1 outline-dark-blue"/>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <select name="department"
                                onChange={handleChange}
                                className={`w-full cursor-pointer border border-gray-400 px-4 py-1.5 text-sm ${formData.department ? 'text-dark-blue' : 'text-placeholder'} rounded-md mb-1 mr-3 outline-1 outline-dark-blue`}>
                            <option hidden>Department</option>
                            <option value="ETP" className="text-dark-blue">ETP</option>
                            <option value="CSP" className="text-dark-blue">CSP</option>
                            <option value="NP" className="text-dark-blue">NP</option>
                            <option value="CJEP" className="text-dark-blue">CJEP</option>
                            <option value="BAP" className="text-dark-blue">BAP</option>
                            <option value="AP" className="text-dark-blue">AP</option>
                            <option value="TEP" className="text-dark-blue">TEP</option>
                            <option value="ASP" className="text-dark-blue">ASP</option>
                        </select>
                    </div>
                    <div className="w-full mr-3 flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <select name="course"
                                onChange={handleChange}
                                className={`w-full border border-gray-400 px-4 py-1.5 text-sm ${formData.course ? 'text-dark-blue' : 'text-placeholder'} rounded-md mb-1 mr-3 outline-1 outline-dark-blue ${formData.department ? 'cursor-pointer' : 'pointer-events-none'}`}>
                            <option hidden>Course</option>
                            {formData.department && courses(formData.department).map((data, index) => {
                                return <option value={data} className="text-dark-blue" key={index}>{data}</option>
                            })}
                        </select>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <select name="year"
                                onChange={handleChange}
                                className={`w-full cursor-pointer border border-gray-400 px-4 py-1.5 text-sm ${formData.year ? 'text-dark-blue' : 'text-placeholder'} rounded-md mb-1 outline-1 outline-dark-blue`}>
                            <option hidden>Year</option>
                            <option value="1" className="text-dark-blue">I</option>
                            <option value="2" className="text-dark-blue">II</option>
                            <option value="3" className="text-dark-blue">III</option>
                            <option value="4" className="text-dark-blue">IV</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-full mr-3 flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <input type="text" placeholder="GSuite Email" name="email"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                    </div>
                    <div className="w-full mr-3 relative flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <input type={passA ? "text" : "password"} placeholder="Password" name="password"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                        {formData.password && <PasswordViewer visible={passA} setVisible={setPassA}/>}
                    </div>
                    <div className="w-full relative flex flex-col">
                        <label htmlFor="" className="text-[12px] text-red-600">Student ID</label>
                        <input type={passB ? "text" : "password"} placeholder="Confirm Password" name="confirm_password"
                               onChange={handleChange}
                               className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                        {formData.confirm_password && <PasswordViewer visible={passB} setVisible={setPassB}/>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue">SUBMIT
                </button>
                <p className="text-sm mt-1">Already have an account? <Link to="/signin" className="underline text-dark-blue">Sign In</Link></p>
            </form>
            {popup.state && <Popup data={popup}/>}
        </>
    )
}
export default SignupForm;
