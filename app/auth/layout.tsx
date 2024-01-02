export default function AuthLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="h-full flex justify-center items-center min-h-screen bg-gray-200">
            {children}
        </div>
    )
}
