import { createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import Error from "../pages/Error";

// All routes
export const routes = createBrowserRouter([
    {
        path: "/kf",
        element : <LoginPage/>,
        errorElement : <Error/>
    },
    {
        path:"/",
        element :<Homepage/>,
        index : true
    }
]);

