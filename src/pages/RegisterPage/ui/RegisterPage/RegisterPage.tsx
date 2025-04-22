import type { FC } from "react";
import { RegisterForm } from "@/pages/RegisterPage";
import { MainLayout } from "@/widgets/layouts/MainLayout/MainLayout";

export const RegisterPage: FC = () => {
    return (
        <MainLayout>
            <h1>Register</h1>
            <RegisterForm />
        </MainLayout>
    );
};
