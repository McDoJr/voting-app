import Header from "../../components/header.jsx";
import SigninForm from "./signin-form.jsx";

const SigninPage = () => {
    return (
        <section className="w-full h-screen flex flex-col items-center bg-fsuu-cover bg-cover bg-center">
            <Header/>
            <SigninForm/>
        </section>
    )
}
export default SigninPage;
