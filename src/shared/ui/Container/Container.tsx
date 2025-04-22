import cn from "classnames";
import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
    <div className={cn("tablet:px-4 desktop:px-8 container m-auto", className)}>{children}</div>
);
