import Logo from "../../assets/fsuu_logo.png";
import CSP from "../../assets/csp.png";
import {currentDate, getLogo} from "../../utils/utils.js";
import DashboardRecords from "./dashboard-records.jsx";
import {departments} from "../../components/data.js";
import {useState} from "react";
import DashboardVotes from "./dashboard-votes.jsx";
import {candidates, positions} from "../../utils/mock-data.js";
import {FaCaretLeft, FaCaretRight} from "react-icons/fa";

const DashboardContents = () => {

    const [department, setDepartment] = useState("CSP");
    const [index, setIndex] = useState(0);
    // Temporary
    const totalPositions = 4;

    const getData = (type) => {
        const position = positions(type)[index];
        return {
            type,
            position,
            candidates: candidates(type)[position]
        }
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setDepartment(value.toLowerCase());
    }

    const next = () => {
        if(index < totalPositions - 1) setIndex(index+1);
    }

    const previous = () => {
        if(index > 0) setIndex(index-1);
    }

    return (
        <section className="w-full h-full bg-white flex flex-col">
            <div className="flex px-8 py-4">
                <div className="flex flex-col">
                    <div className="flex items-center mb-10">
                        <img src={Logo} alt="" className="w-[80px]"/>
                        <img src={getLogo(department)} alt="" className="w-[70px]"/>
                        <div className="flex flex-col ml-5">
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <p className="text-[16px] ml-0.5">{currentDate()}</p>
                        </div>
                        <select name="" id=""
                                onChange={handleChange}
                                className="ml-6 border border-gray-400 px-6 py-2 text-dark-blue outline-0 cursor-pointer">
                            {Object.keys(departments()).map((data, i) => {
                                return <option value={data} key={i}>{data}</option>
                            })}
                        </select>
                    </div>
                    <DashboardRecords/>
                </div>
                <div className="h-[240px] ml-auto p-3 flex flex-col border border-dark-blue rounded-md">
                    <h5 className="mb-4 font-[500]">Recently Voted</h5>
                    <p className="tracking-wide text-sm">11111111111 user voted</p>
                    <p className="tracking-wide text-sm">22222222222 user voted</p>
                    <p className="tracking-wide text-sm">33333333333 user voted</p>
                    <p className="tracking-wide text-sm">44444444444 user voted</p>
                    <p className="tracking-wide text-sm">55555555555 user voted</p>
                    <p className="tracking-wide text-sm">66666666666 user voted</p>
                    <p className="tracking-wide text-sm">77777777777 user voted</p>
                    <p className="tracking-wide text-sm">88888888888 user voted</p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <DashboardVotes data={getData("executive")}/>
                <DashboardVotes data={getData("local")}/>
            </div>
            <div className="w-full flex justify-around items-center mx-auto">
                <FaCaretLeft className="text-5xl text-dark-blue cursor-pointer" onClick={previous}/>
                <FaCaretRight className="text-5xl text-dark-blue cursor-pointer" onClick={next}/>
            </div>
        </section>
    )
}
export default DashboardContents;
