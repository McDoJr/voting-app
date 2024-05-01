import LOGO from "../../assets/fsuu_logo.png";
import axios from "axios";
import {form} from "../../components/data.js";

const Registration = () => {

    const {formData, setFormData, handleChange} = form();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/register', formData)
            .then(res => {
                console.log(res);
            })
            .catch(error => alert("Error!"))
    }

    return (
        <section className="w-full h-screen flex flex-col items-center font-inter bg-fsuu-bg bg-cover bg-center">
            <div className="p-4 bg-primary rounded-3xl my-7">
                <h1 className="text-4xl font-bold">FSUU SSG VOTING SYSTEM</h1>
            </div>
            <form action="" className="flex flex-col justify-center items-center py-6 px-12 bg-secondary rounded-3xl" onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold">Student's Registration</h2>
                <img src={LOGO} alt="" className="w-20 h-20 my-3"/>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="name" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Name:</label>
                    <input type="text" name="name" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}/>
                </div>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="name" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Course:</label>
                    <input type="text" name="course" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}/>
                </div>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="year" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Year:</label>
                    <input type="text" name="year" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}/>
                </div>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="email" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Email Address:</label>
                    <input type="text" name="email" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}/>
                </div>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="password" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Password:</label>
                    <input type="text" name="password" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}/>
                </div>
                <div className="w-[390px] flex justify-between items-center mb-1.5">
                    <label htmlFor="program" className="mr-6 text-[14px] text-end font-[500] w-[160px]">Program:</label>
                    <select name="program" id="" className="w-full outline-0 text-[12px] py-[2px] px-[8px] border border-black rounded-3xl" onChange={handleChange}>
                        <option hidden>Choose Program</option>
                        <option value="ETP">ETP - ENGINEERING TECHNOLOGY PROGRAM</option>
                        <option value="CSP">CSP - COMPUTER STUDIES PROGRAM</option>
                        <option value="NP">NP - NURSING PROGRAM</option>
                        <option value="CJEP">CJEP CRIMINAL JUSTICE EDUCATION PROGRAM</option>
                        <option value="BAP">BAP - BUSINESS ADMINISTRATION PROGRAM</option>
                        <option value="AP">AP - ACCOUNTANCY PROGRAM</option>
                        <option value="TEP">TEP - TEACHERS EDUCATION PROGRAM</option>
                        <option value="ASP">ASP - ARTS AND SCIENCES PROGRAM</option>
                    </select>
                </div>
                <button type="submit" className="p-1 text-[12px] border border-black rounded-3xl mt-3">Confirm Registration</button>
            </form>
            <p className="text-white text-sm self-start mt-auto ml-5 mb-1.5">Note: Use your Gsuite Account</p>
        </section>
    )
}
export default Registration;
