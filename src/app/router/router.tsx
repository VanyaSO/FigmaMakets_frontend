import { createBrowserRouter } from "react-router";
import { HomePage } from "../../pages/HomePage";
import routes from "../../shared/config/links";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: routes.home,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: routes.login,
                element: <LoginPage />,
            },
            {
                path: routes.register,
                element: <RegisterPage />,
            },
        ],
    },
]);
