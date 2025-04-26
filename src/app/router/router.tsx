import { createBrowserRouter } from "react-router";
import routerPaths from "../../shared/config/routerPaths";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RegisterPage } from "@/pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: routerPaths.home,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: routerPaths.login,
                element: <LoginPage />,
            },
            {
                path: routerPaths.register,
                element: <RegisterPage />,
            },
        ],
    },
]);
