import type { FC, ReactNode } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

interface MainLayoutProps {
    children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
