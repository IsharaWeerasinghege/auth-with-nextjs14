"use server";
import * as z from "zod";
import bcrypt from "bcrypt";

import {RegisterSchema} from "@/schemas";
import {db} from "@/lib/db";
import {getUserByEmail} from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            status: 400,
            message: "Invalid fields",
        }
    }

    const {email, password, name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const exitingUser = await getUserByEmail(email);

    if (exitingUser) {
        return {
            status: 400,
            message: "User already exists",
        }
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    })

    // TODO: Send email to user

    return {
        status: 200,
        message: "User created successfully",
    }
};
