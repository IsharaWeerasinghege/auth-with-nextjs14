"use server";
import * as z from "zod";
import {LoginSchema, RegisterSchema} from "@/schemas";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validatedFields = RegisterSchema.safeParse(values);

   if (!validatedFields.success) {
        return {
             error: "error"
        }
   }

    return {
      success: "success"
    }
};
