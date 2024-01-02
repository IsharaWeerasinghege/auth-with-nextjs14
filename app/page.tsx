import {Button} from "@/components/ui/button";
import {Poppins} from "next/font/google";

import {cn} from "@/lib/utils";
import {LoginButton} from "@/components/auth/login-button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col  items-center justify-center p-24 bg-gray-200">
            <div className="space-y-6 text-center">
                <h1 className={cn("text-6xl font-semibold drop-shadow-md", font.className)}>
                    🛡️ Auth
                </h1>
                <p className=" text-lg">
                    A simple, secure and easy to use authentication system for your next project.
                </p>
                <div>
                    <LoginButton>
                        <Button size="lg">Sign In</Button>
                    </LoginButton>
                </div>
            </div>
        </main>
    )
}
