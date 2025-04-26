import type { FC, ReactNode } from "react";
import { Footer } from "@/widgets/Footer/Footer";
import { Header } from "@/widgets/Header/Header";

interface MainLayoutProps {
    children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
        </>
    );
};
