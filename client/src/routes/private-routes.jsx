import {authData} from "../hooks/auth-hooks.js";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = ({condition = null}) => {

    condition = condition == null ? authData().loggedIn() : condition;

    return condition ? <Outlet/> : <Navigate to="/"/>
}
export default PrivateRoutes;
