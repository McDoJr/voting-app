import {form, validate} from "../../components/data.js";
import axios from "axios";
import {Link} from "react-router-dom";

const SignupForm = () => {

    const {formData, setFormData, handleChange} = form({
        firstname: "",
        lastname: "",
        course: "",
        year: "",
        department: "",
        email: "",
        password: "",
        confirm_password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(formData)) {
            alert("Fill out all fields!");
            return
        }
        if(formData.password !== formData.confirm_password) {
            return;
        }
        axios.post('http://localhost:8081/register', formData)
            .then(console.log)
            .catch(console.log);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center bg-white py-6 px-16 my-auto rounded-md shadow-lg shadow-gray-700">
            <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN UP</h1>
            <div className="flex w-full">
                <input type="text" placeholder="First Name" name="firstname"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                <input type="text" placeholder="Last Name" name="lastname"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
            </div>
            <div className="flex w-full">
                <input type="text" placeholder="Course" name="course"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                <select name="year"
                        onChange={handleChange}
                        className={`w-full border border-gray-400 px-4 py-1.5 text-sm ${formData.year ? 'text-dark-blue' : 'text-placeholder'} rounded-md mb-3 outline-1 outline-dark-blue`}>
                    <option hidden>Year</option>
                    <option value="1" className="text-dark-blue">I</option>
                    <option value="2" className="text-dark-blue">II</option>
                    <option value="3" className="text-dark-blue">III</option>
                    <option value="4" className="text-dark-blue">IV</option>
                </select>
            </div>
            <div className="flex w-full">
                <select name="department"
                        onChange={handleChange}
                        className={`w-full border border-gray-400 px-4 py-1.5 text-sm ${formData.department ? 'text-dark-blue' : 'text-placeholder'} rounded-md mb-3 mr-3 outline-1 outline-dark-blue`}>
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
                <input type="text" placeholder="Email Address" name="email"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
            </div>
            <div className="flex w-full">
                <input type="password" placeholder="Password" name="password"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                <input type="password" placeholder="Confirm Password" name="confirm_password"
                       onChange={handleChange}
                       className="w-full border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
            </div>
            <button
                type="submit"
                className="py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue">SUBMIT
            </button>
            <p className="text-sm mt-1">Already have an account? <Link to="/signin" className="underline text-dark-blue">Sign In</Link></p>
        </form>
    )
}
export default SignupForm;
