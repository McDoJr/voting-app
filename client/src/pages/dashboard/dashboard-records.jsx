import {FaPencil, FaPeopleGroup} from "react-icons/fa6";

const DashboardRecords = () => {
    return (
        <div className="w-full flex">
            <div className="border-2 w-40 border-dark-blue p-3 flex flex-col items-center rounded-lg mr-3">
                <FaPeopleGroup className="self-end text-2xl"/>
                <h3 className="text-4xl">8</h3>
                <p className="mt-3">No. of Positions</p>
            </div>
            <div className="border-2 w-40 border-dark-blue p-3 flex flex-col items-center rounded-lg mr-3">
                <FaPeopleGroup className="self-end text-2xl"/>
                <h3 className="text-4xl">8</h3>
                <p className="mt-3">No. of Candidates</p>
            </div>
            <div className="border-2 w-40 border-dark-blue p-3 flex flex-col items-center rounded-lg mr-3">
                <FaPeopleGroup className="self-end text-2xl"/>
                <h3 className="text-4xl">8</h3>
                <p className="mt-3">Total Voters</p>
            </div>
            <div className="border-2 w-40 border-dark-blue p-3 flex flex-col justify-between items-center rounded-lg">
                <FaPencil className="self-end text-xl"/>
                <h3 className="text-4xl">8</h3>
                <p className="mt-3">Voters Voted</p>
            </div>
        </div>
    )
}
export default DashboardRecords;
