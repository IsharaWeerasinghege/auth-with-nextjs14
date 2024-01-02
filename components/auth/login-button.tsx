"use client";

import React from "react";
import {useRouter} from "next/navigation";

interface loginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({children, mode = "redirect", asChild}: loginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        if(mode === "redirect") {
            router.push("/auth/login");
        }
    }

    if(mode === "modal") {
        return (
            <span>
                Todo: implement modal
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}