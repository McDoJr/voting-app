import {FaEye, FaEyeSlash} from "react-icons/fa";

const PasswordViewer = ({visible, setVisible, name}) => {

    const toggle = () => {
        setVisible({...visible, [name]: !visible[name]});
    }

    const className = "absolute w-4 h-4 right-3 top-2.5 text-dark-blue cursor-pointer";

    return (
        <div>
            {visible[name] ? <FaEye onClick={toggle} className={className}/> : <FaEyeSlash onClick={toggle} className={className}/>}
        </div>
    )
};

export default PasswordViewer;
