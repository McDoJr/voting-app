import Header from "../../components/header.jsx";
import SignupForm from "./signup-form.jsx";

const SignupPage = () => {

    document.title = "Sign Up";

    return (
        <section className="w-full h-screen flex flex-col items-center bg-fsuu-cover bg-cover bg-center">
            <Header/>
            <SignupForm/>
        </section>
    )
}
export default SignupPage;
