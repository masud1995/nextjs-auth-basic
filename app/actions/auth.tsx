import { FormState, SignupFormSchema } from "../lib/definitions";

export const signup = async (state: FormState, formData: FormData) => {
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
