import Admin from "../../assets/admin-logo.png";
import {FaSignOutAlt} from "react-icons/fa";

const DashboardNavigation = () => {
    return (
        <nav className="h-full p-20 flex flex-col bg-dark-blue">
            <div className="flex flex-col items-center">
                <img src={Admin} alt="admin-logo.png" className="w-[100px]"/>
                <h1 className="text-white text-2xl mt-1.5">Admin</h1>
                <p className="text-gray-400">admin@gmail.com</p>
            </div>
            <ul className="mt-20 flex flex-col h-full font-poppins">
                <li className="mb-4"><a href="" className="text-white text-[28px] font-[500]">Dashboard</a></li>
                <li className="mb-4"><a href="" className="text-white text-[28px] font-[500]">Reports</a></li>
                <li className="mb-4"><a href="" className="text-white text-[28px] font-[500]">Show All Results</a></li>
                <li className="mb-4"><a href="" className="text-white text-[28px] font-[500]">Print Results</a></li>
                <li className="mt-auto"><a href="" className="text-white text-[24px] font-[500] flex items-center cursor-pointer"><FaSignOutAlt className="mr-3"/> Sign Out</a></li>
            </ul>
        </nav>
    )
}
export default DashboardNavigation;
