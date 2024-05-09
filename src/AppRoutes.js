import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/admin";
import User from "./components/user/user";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Admin/>}/>
            <Route path={"/chat-user2"} element={<User/>}/>
        </Routes>
    )
};

export default AppRoutes;
