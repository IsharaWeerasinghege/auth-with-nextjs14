import {CardWrapper} from "@/components/auth/card-wrapper";

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Don't have an account? Sign Up"
            backButtonHref="/auth/register"
            showSocial
        >
            <h1>Login Form</h1>
        </CardWrapper>
    );
}