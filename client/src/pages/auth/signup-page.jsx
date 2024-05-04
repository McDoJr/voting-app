import Header from "../../components/header.jsx";
import SignupForm from "./signup-form.jsx";
import Icon from "../../assets/login.png";

const SignupPage = () => {

    document.title = "Sign Up";

    return (
        <section className="w-full h-screen flex flex-col justify-center items-center relative">
            {/*<Header/>*/}
            <h1 className="font-prompt font-bold text-dark-blue text-5xl mb-6 drop-shadow-lg">FSUU VOTING SYSTEM</h1>
            <div className="flex rounded-md shadow-lg shadow-gray-700">
                <img src={Icon} alt="" className="w-[500px]"/>
                <SignupForm/>
            </div>
        </section>
        // <section className="w-full h-screen flex items-center bg-dark-blue p-6">
        //     <nav className="w-[300px] h-full bg-dark-blue mr-6 rounded-3xl shadow-lg shadow-black">
        //
        //     </nav>
        //     <div className="w-full h-full flex bg-white rounded-3xl shadow-lg shadow-black">
        //         <SignupForm/>
        //     </div>
        // </section>
    )
}
export default SignupPage;
