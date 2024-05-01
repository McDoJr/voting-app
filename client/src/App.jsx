import {DataContext} from "./utils/context.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/auth/registration-page.jsx";
import LoginPage from "./pages/auth/login-page.jsx";
import {form} from "./components/data.js";
import SignupPage from "./pages/auth/signup-page.jsx";


const App = () => {

    const { formData: user, setFormData: setUser } = form();

    return (
        <DataContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<RegistrationPage/>}/>
                    <Route path="/register" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}
export default App;

