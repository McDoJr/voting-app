import Logo from "../../assets/fsuu_logo.png";
import CSP from "../../assets/csp.png";
import {currentDate, getLogo} from "../../utils/utils.js";
import DashboardRecords from "./dashboard-records.jsx";
import {departments} from "../../components/data.js";
import {useState} from "react";
import DashboardSummary from "./dashboard-summary.jsx";

const DashboardContents = () => {

    const [department, setDepartment] = useState("CSP");


    const handleChange = (e) => {
        const {value} = e.target;
        setDepartment(value.toLowerCase());
    }

    return (
        <section className="w-full h-full bg-white flex flex-col">
            <div className="flex px-16 pt-4">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <img src={Logo} alt="" className="w-[80px]"/>
                        {/*<img src={getLogo(department)} alt="" className="w-[70px]"/>*/}
                        <div className="flex flex-col ml-5">
                            <h1 className="text-4xl font-bold">Dashboard</h1>
                            <p className="text-[18px] ml-0.5 font-[500]">{currentDate()}</p>
                        </div>
                        {/*<select name="" id=""*/}
                        {/*        onChange={handleChange}*/}
                        {/*        className="ml-6 border border-gray-400 px-6 py-2 text-dark-blue outline-0 cursor-pointer">*/}
                        {/*    {Object.keys(departments()).map((data, i) => {*/}
                        {/*        return <option value={data} key={i}>{data}</option>*/}
                        {/*    })}*/}
                        {/*</select>*/}
                    </div>
                </div>
            </div>
            <DashboardSummary type="executive"/>
            <DashboardSummary type="local"/>
        </section>
    )
}
export default DashboardContents;
