import Admin from "../../assets/admin-logo.png";
import {FaSignOutAlt} from "react-icons/fa";
import {Link} from "react-router-dom";

const DashboardNavigation = () => {
    return (
        <nav className="h-full p-10 2xl:p-20 flex flex-col bg-dark-blue">
            <div className="flex flex-col items-center">
                <img src={Admin} alt="admin-logo.png" className="w-[70px] 2xl:w-[100px]"/>
                <h1 className="text-white text-xl 2xl:text-2xl mt-1.5 font-[500]">Admin</h1>
                <p className="text-gray-400 text-[14px] 2xl:text-[16px]">admin@gmail.com</p>
            </div>
            <ul className="mt-20 flex flex-col h-full font-poppins">
                <li className="mb-4"><a href="" className="text-white text-[22px] 2xl:text-[28px] font-[500]">Dashboard</a></li>
                <li className="mb-4"><a href="" className="text-white text-[22px] 2xl:text-[28px] font-[500]">Reports</a></li>
                <li className="mb-4"><a href="" className="text-white text-[22px] 2xl:text-[28px] font-[500]">Show All Results</a></li>
                <li className="mb-4"><a href="" className="text-white text-[22px] 2xl:text-[28px] font-[500]">Print Results</a></li>
                <li className="mt-auto"><Link to="/signin" className="text-white text-[18px] 2xl:text-[24px] font-[500] flex items-center cursor-pointer"
                                              onClick={() => {
                                                  localStorage.removeItem("user");
                                              }}><FaSignOutAlt className="mr-3"/> Sign Out</Link></li>
            </ul>
        </nav>
    )
}
export default DashboardNavigation;
