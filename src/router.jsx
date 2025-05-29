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
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import AdminStatistics from "./pages/Dashboard/AdminStatistics/AdminStatistics";
import User from "./pages/Dashboard/User/User";
import TeacherRequest from "./pages/Dashboard/TeacherRequest/TeacherRequest";
import Profile from "./Shared/Profile";
import MyClass from "./pages/Dashboard/MyClass/MyClass";
import MyClassDetails from "./components/MyClassDetails/MyClassDetails";
import UpdateClass from "./components/UpdateClass/UpdataClass";
import MyEnrollClass from "./pages/Dashboard/MyEnrollClass/MyEnrollClass";
import MyEnrollClassDetails from "./components/MyEnrollClassDetails/MyEnrollClassDetails";
import AllClasses from "./components/AllClasses/AllClasses";

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
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

            {
                path: "/addFeedBack",
                element: <AddFeedBack></AddFeedBack>,
            },
            {
                path: "/classes",
                element: <Classes></Classes>,
            },
            {
                path: "/techOn",
                element: <TechOn></TechOn>,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <AdminStatistics></AdminStatistics>,
            },
            {
                path: "user",
                element: <User></User>,
            },
            {
                path: "teacherRequest",
                element: <TeacherRequest></TeacherRequest>,
            },
            {
                path: "profile",
                element: <Profile></Profile>,
            },
            {
                path: "addClass",
                element: <AddClass></AddClass>,
            },
            {
                path: "myClass",
                element: <MyClass></MyClass>
            },
            {
                path: "updateClass/:id",
                element: <UpdateClass></UpdateClass>
            },
            {
                path: "myClassDetails/:id",
                element: <MyClassDetails></MyClassDetails>
            },
            {
                path: "myEnrollClass",
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: "myEnrollClassDetails/:id",
                element: <MyEnrollClassDetails></MyEnrollClassDetails>
            },
            {
                path: "AllClasses",
                element: <AllClasses></AllClasses>
            },
        ],
    },
]);

export default router;
