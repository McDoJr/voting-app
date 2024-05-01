import LoginForm from "./login-form.jsx";

const LoginPage = () => {

    return (
        <section className="w-full h-screen flex flex-col items-center font-inter bg-fsuu-bg bg-cover bg-center">
            <div className="p-4 bg-primary rounded-3xl my-7">
                <h1 className="text-4xl font-bold">FSUU SSG VOTING SYSTEM</h1>
            </div>
            <LoginForm/>
            <p className="text-white text-sm self-start mt-auto ml-5 mb-1.5">Note: Use your Gsuite Account</p>
        </section>
    )
}
export default LoginPage;
