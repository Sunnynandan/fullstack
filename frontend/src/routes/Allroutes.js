import { createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Error from "../pages/Error";

// All routes
export const routes = createBrowserRouter([
    {
        path: "/",
        element : <LoginPage/>,
        errorElement : <Error/>
    },
    {
        path:"/homepage",
        element :<Homepage/>
    }
]);

