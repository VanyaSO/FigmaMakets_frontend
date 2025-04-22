import type { FC } from "react";
import { memo } from "react";
import { Container } from "@/shared/ui/Container";

export const Header: FC = memo(() => {
    return (
        <header className="bg-purple-800">
            <Container>
                <div className="desktop:h-[82px] flex h-[70px] items-center justify-between text-white">header</div>
            </Container>
        </header>
    );
});
