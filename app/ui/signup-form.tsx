"use client";

import React from "react";
import { signup } from "../actions/auth";
import { useFormState, useFormStatus } from "react-dom";

const SignupForm = () => {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Passwrod must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <SubmitButton />
    </form>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      Signup
    </button>
  );
};

export default SignupForm;
