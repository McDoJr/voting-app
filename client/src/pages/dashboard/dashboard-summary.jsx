import {candidates, positions} from "../../utils/mock-data.js";
import {useState} from "react";
import {FaArrowRight, FaCaretLeft, FaCaretRight} from "react-icons/fa";
import {format, getLogo} from "../../utils/utils.js";
import Leaderboard from "../../components/leaderboard.jsx";
import {
    FaArrowLeftLong,
    FaArrowRightLong,
    FaRegSquareCaretRight,
    FaSquareCaretLeft,
    FaSquareCaretRight
} from "react-icons/fa6";

const DashboardSummary = ({type}) => {

    const [index, setIndex] = useState(0);
    const [department, setDepartment] = useState("asp");
    // Temporary
    const totalPositions = 4;
    let logo = type === "executive" ? require("../../assets/executive.png") : getLogo(department);

    const getData = () => {
        const position = positions(type)[index];
        return {
            type,
            position,
            candidates: candidates(type)[position]
        }
    }

    const next = () => {
        if (index < totalPositions - 1) setIndex(index + 1);
    }

    const previous = () => {
        if (index > 0) setIndex(index - 1);
    }

    return (
        <div className="w-full py-8 px-16 border flex flex-col">
            <div className="flex items-center mb-6">
                <h1 className="text-3xl font-bold">{format(type)} {type === "executive" ? "Council" : "Department"}</h1>
            </div>
            <div className="flex relative">
                <Leaderboard data={getData()} limit={2}/>
                <Leaderboard data={getData()} limit={2}/>
                <FaCaretLeft className="absolute left-0 top-[108px] text-[30px] cursor-pointer text-dark-blue"/>
                <FaCaretRight className="absolute right-0 top-[108px] text-[30px] cursor-pointer text-dark-blue"/>
            </div>
        </div>
    )
}
export default DashboardSummary;
