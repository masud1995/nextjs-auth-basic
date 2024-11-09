"use server";

import {
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
  SignupFormState,
} from "../lib/definitions";
import { PrismaClient, Prisma } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt-ts";

const prisma = new PrismaClient();

export const signupAction = async (
  state: SignupFormState,
  formData: FormData
) => {
  //Validate form fields
  const validateFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    appsecrete: formData.get("appsecrete"),
  });

  // If any form fields are invalid return early
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user....
  //Prepare data for insertion into database
  const { name, email, password, appsecrete } = validateFields.data;
  // Hash the passwrod
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  // console.log(name, email, password, appsecrete, hashedPassword);
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // TODO:
  // Create user session
  // Redirect user
};

export const loginAction = async (
  state: LoginFormState,
  formData: FormData
) => {
  //Validate form fields
  const validateFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  // If any form fields are invalid return early
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user....
};
