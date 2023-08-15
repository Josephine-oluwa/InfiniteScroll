import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "*",
        element: <Error/>
    },

])