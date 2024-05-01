import Header from "../../components/header.jsx";

const SignupPage = () => {
    return (
        <section className="w-full h-screen flex flex-col items-center bg-fsuu-cover bg-cover bg-center">
            <Header/>

            <form className="flex flex-col justify-center items-center bg-white py-6 px-16 my-auto rounded-md shadow-lg shadow-gray-700">
                <h1 className="text-3xl font-bold text-dark-blue mb-6">SIGN UP</h1>
                <div className="flex">
                    <input type="text" placeholder="First Name" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                    <input type="text" placeholder="Last Name" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Course" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                    <input type="text" placeholder="Year" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Department" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                    <input type="text" placeholder="Email Address" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                </div>
                <div className="flex">
                    <input type="password" placeholder="Password" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 mr-3 outline-1 outline-dark-blue"/>
                    <input type="password" placeholder="Confirm Password" name="first_name"
                           className="border border-gray-400 px-4 py-1.5 text-sm text-dark-blue rounded-md mb-3 outline-1 outline-dark-blue"/>
                </div>
                <button className="py-2 px-10 bg-dark-blue text-white font-[500] tracking-wider transition-all border-2 border-dark-blue hover:bg-white hover:text-dark-blue">SUBMIT</button>
            </form>
        </section>
    )
}
export default SignupPage;
