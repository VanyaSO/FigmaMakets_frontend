import { UserOutlined } from "@ant-design/icons";
import type { FC } from "react";
import { memo } from "react";
import { Link } from "react-router";
import routerPaths from "@/shared/config/routerPaths";
import { Container } from "@/shared/ui/Container/Container";

export const Header: FC = memo(() => {
    return (
        <header className="desktop:h-[82px] bg-purple-dark flex h-[70px] items-center">
            <Container>
                <div className="flex items-center justify-between text-white">
                    <div>LOGO</div>
                    <nav>
                        <ul className="flex gap-8">
                            <li>
                                <Link to={routerPaths.home}>Home</Link>
                            </li>
                            <li className="text-color-purple-default">
                                <Link to={routerPaths.feedback}>Feedback</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex">
                        <Link to={routerPaths.profile} className="text-purple-default">
                            <UserOutlined />
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
});
