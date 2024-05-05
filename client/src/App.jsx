import {DataContext} from "./utils/context.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {form} from "./components/data.js";
import SignupPage from "./pages/auth/signup-page.jsx";
import SigninPage from "./pages/auth/signin-page.jsx";
import VerificationPage from "./pages/auth/verification-page.jsx";
import DashboardPage from "./pages/dashboard/dashboard-page.jsx";


const App = () => {

    const { formData: user, setFormData: setUser } = form();

    return (
        <DataContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<SigninPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/signin" element={<SigninPage/>}/>
                    <Route path="/signup/otp" element={<VerificationPage/>}/>
                    <Route path="/admin/dashboard" element={<DashboardPage/>}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}
export default App;

