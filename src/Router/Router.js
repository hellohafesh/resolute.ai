import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddSutdent from "../Pages/AddSutdent/AddSutdent";
import Login from "../Pages/Login/Login";
import ManageStudent from "../Pages/ManageStudent/ManageStudent";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <AddSutdent></AddSutdent>,
            },
            {
                path: '/managestudent',
                element: <ManageStudent></ManageStudent>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>,
    },
])

export default router;