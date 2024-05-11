import {format} from "../utils/utils.js";

const Leaderboard = ({data, limit}) => {

    const {position, candidates} = data;

    const getCandidates = () => {
        const list = [];
        for(let i = 0; i < limit; i++) {
            list.push(candidates[i]);
        }
        return list;
    }

    const getPercentage = (amount) => {
        return parseInt(((100 * amount) / 280) + "");
    }

    const progressBar = (a, ranking) => {

        return (
            <div className="w-[450px] h-[50px] bg-gray-200 relative text-[18px] font-[500] text-center leading-[50px]">
                <span>{a.firstname} {a.lastname} {a.votes} Votes</span>
                <span className="absolute left-2 top-0">#{ranking}</span>
                <div className="absolute left-0 top-0 h-full overflow-hidden"
                     style={{width: `${getPercentage(a.votes)}%`}}>
                    <div
                        className="absolute left-0 top-0 h-full w-[450px] bg-dark-blue text-white">{a.firstname} {a.lastname} {a.votes} Votes
                        <span className="absolute left-2 top-0">#{ranking}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col w-[50%] select-none">
                <h2 className="text-[22px] font-bold mb-6 self-center">{format(position)} Position</h2>
                {getCandidates().map((candidate, index) => {
                    return (
                        <div className={`flex self-center ${index < limit - 1 ? "mb-6" : ""}`} key={index}>
                            {progressBar(candidate, index + 1)}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Leaderboard;
