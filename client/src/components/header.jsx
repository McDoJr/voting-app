import Logo from "../assets/fsuu_logo.png";

const Header = () => {
    return (
        <nav className="w-full h-32 py-10 px-24 bg-white flex justify-center items-center shadow-black shadow-sm">
            {/*<img src={Logo} alt="" className="w-16 h-16 mr-6"/>*/}
            <h1 className="text-4xl text-dark-blue font-bold tracking-widest">FSUU VOTING SYSTEM</h1>
        </nav>
    )
}
export default Header;
