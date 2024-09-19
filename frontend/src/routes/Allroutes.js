import { createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";

// All routes
export const routes = createBrowserRouter([
    {
        path: "/",
        element : <LoginPage/>
    },
    {
        path:"/homepage",
        element :<Homepage/>
    }
]);

