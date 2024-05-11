import Header from "../../components/header.jsx";
import SigninForm from "./signin-form.jsx";
import Icon from "../../assets/signup.png";


const SigninPage = () => {

    document.title = "Sign In";

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
            {/*<Header/>*/}
            <h1 className="font-prompt font-bold text-dark-blue text-5xl mb-6 drop-shadow-lg">FSUU VOTING SYSTEM</h1>
            <div className="flex rounded-md shadow-lg shadow-gray-700">
                <img src={Icon} alt="" className="w-[500px] scale-[1.2]"/>
                <SigninForm/>
            </div>
        </section>
    )
}
export default SigninPage;
