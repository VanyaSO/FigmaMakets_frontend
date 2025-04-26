import { type FC, memo } from "react";
import { Link } from "react-router";
import NotFound from "@/shared/assets/images/notFound404.png";
import routerPaths from "@/shared/config/routerPaths";
import { Container } from "@/shared/ui/Container/Container";
import { MainLayout } from "@/widgets/layouts/MainLayout/MainLayout";

export const NotFoundPage: FC = memo(() => {
    return (
        <MainLayout>
            <div>
                <Container>
                    <div className="flex flex-col items-center justify-center text-center text-black">
                        <img src={NotFound} alt="404" className="mb-8 w-full max-w-[590px]" />
                        <Link
                            to={routerPaths.home}
                            className="bg-purple-dark hover:bg-purple rounded-lg px-6 py-2 font-bold text-white transition-all duration-300 ease-in-out"
                        >
                            Go to Home
                        </Link>
                    </div>
                </Container>
            </div>
        </MainLayout>
    );
});
