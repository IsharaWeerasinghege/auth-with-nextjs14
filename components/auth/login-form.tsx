"use client";

import * as z from 'zod';
import {useForm} from "react-hook-form";
import {useState, useTransition} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "@/schemas";

import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {CardWrapper} from "@/components/auth/card-wrapper";
import {Button} from "@/components/ui/button";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {login} from "@/actions/login";

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onsubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values)
                .then((data:{message: string, status: number}) => {

                    if (data?.status === 401) {
                        setError(data.message);
                    }

                    if (data?.status === 200) {
                        setSuccess(data.message);
                    }
                })
        });
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Don't have an account? Sign Up"
            backButtonHref="/auth/signup"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onsubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            name="email"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="email"
                                            placeholder="john.doe@example.com"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="●●●●●●●"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        Sign In
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}