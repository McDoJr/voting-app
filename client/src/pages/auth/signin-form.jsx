import {form} from "../../components/data.js";
import axios from "axios";
import {Link} from "react-router-dom";

const SigninForm = () => {

    const {formData, setFormData, handleChange} = form({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', formData)
            .then(res => {
                const {data} = res.data;
                if(data) {
                    console.log(data);
                } else {
                    console.log("Invalid username or password")
                }
            })
            .catch(error => alert("Error!"))
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center bg-white py-6 px-16 my-auto rounded-md shadow-lg shadow-gray-700">
            <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN IN</h1>
            <input type="email" placeholder="Email Address" name="email"
                   onChange={handleChange}
                   className="w-[220px] border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
            <input type="password" placeholder="Password" name="password"
                   onChange={handleChange}
                   className="w-[220px] border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
            <button
                type="submit"
                className="py-2 px-10 mt-4 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue">SUBMIT
            </button>
            <p className="text-sm mt-1">Don't have an account? <Link to="/signup" className="underline text-dark-blue">Sign Up</Link></p>
        </form>
    )
}
export default SigninForm;
