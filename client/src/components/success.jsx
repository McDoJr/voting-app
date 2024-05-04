import {FaCheckCircle} from "react-icons/fa";

const Success = ({message}) => {
    return (
        <section className="w-full h-screen absolute left-0 top-0 bg-black/80 flex justify-center items-center">
            <div className="p-16 bg-white rounded-2xl flex flex-col justify-center items-center">
                <FaCheckCircle className="w-16 h-16 text-green-500"/>
                <h1 className="text-2xl text-green-500 font-bold mt-3">{message}</h1>
            </div>
        </section>
    )
}
export default Success;
