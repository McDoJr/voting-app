const DashboardVotes = ({data}) => {

    const {type, position, candidates} = data;

    const format = (name) => {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    const percentage = (amount) => {
        return parseInt((100 * amount) / 280);
    }

    return (
        <div className="p-8 flex flex-col w-[50%] select-none">
            <h1 className="text-3xl font-[500]">{format(type)} {type === "executive" ? "Council" : "Department"}</h1>
            <h2 className="text-xl font-[500] mt-10 self-center mb-6">{format(position)} Position</h2>
            <div className="flex mb-6">
                <div className="w-32 h-12 flex justify-center items-end flex-wrap mr-2">
                    <h3 className="font-[500] text-[14px] text-center">{candidates[0].firstname} {candidates[0].lastname}</h3>
                </div>
                <div className="flex w-full">
                    <div className="bg-dark-blue" style={{width: `${percentage(candidates[0].votes)}%`}}></div>
                    <div className="bg-gray-200 w-full flex items-center" style={{width: `${100 - percentage(candidates[0].votes)}%`}}>
                    <h5 className="ml-6 font-[500] text-center">{candidates[0].votes} Votes</h5>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-32 h-12 flex justify-center items-end flex-wrap mr-2">
                    <h3 className="font-[500] text-[14px] text-center">{candidates[1].firstname} {candidates[1].lastname}</h3>
                </div>
                <div className="flex w-full">
                    <div className="bg-dark-blue" style={{width: `${percentage(candidates[1].votes)}%`}}></div>
                    <div className="bg-gray-200 w-full flex items-center" style={{width: `${100 - percentage(candidates[1].votes)}%`}}>
                        <h5 className="ml-6 font-[500] text-center">{candidates[1].votes} Votes</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardVotes;
