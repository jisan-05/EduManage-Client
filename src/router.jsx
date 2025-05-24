import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddClass from "./components/AddClass/AddClass";
import AddFeedBack from "./components/AddFeedback/AddFeedBack";
import Classes from "./pages/Classes/Classes";
import TechOn from "./pages/TechOn/TechOn";
import Class from "./components/Class/Class";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courseDetails/:id",
                element: <CourseDetails></CourseDetails>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/addClass',
                element:<AddClass></AddClass>
            },
            {
                path:"/addFeedBack",
                element:<AddFeedBack></AddFeedBack>
            },
            {
                path:"/classes",
                element:<Classes></Classes>
            },
            {
                path:"/techOn",
                element:<TechOn></TechOn>
            },
           
        ],
    },
  
]);

export default router;
