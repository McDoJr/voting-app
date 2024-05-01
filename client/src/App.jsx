import {DataContext} from "./utils/context.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/auth/registration.jsx";
import Login from "./pages/auth/login.jsx";
import {form} from "./components/data.js";


const App = () => {

    const { formData: user, setFormData: setUser } = form();

    return (
        <DataContext.Provider value={null}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Registration/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
    )
}
export default App;

