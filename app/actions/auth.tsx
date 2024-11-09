import {
  LoginFormSchema,
  LoginFormState,
  SignupFormSchema,
  SignupFormState,
} from "../lib/definitions";

export const signupAction = async (
  state: SignupFormState,
  formData: FormData
) => {
  //Validate form fields
  const validateFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
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
