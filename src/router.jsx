import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);


export default router;