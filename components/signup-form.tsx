"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { signupAction } from "@/app/actions/auth";

const SignupForm = () => {
  const [state, action, pending] = useActionState(signupAction, undefined);

  return (
    <form action={action}>
      <Card className="mx-auto max-w-sm w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>Enter your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </div>
            {state?.errors?.name && (
              <p className="text-red-500 text-sm">{state.errors.name}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                name="email"
                placeholder="Enter email"
              />
            </div>
            {state?.errors?.email && (
              <p className="text-red-500 text-sm">{state.errors.email}</p>
            )}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              {state?.errors?.password && (
                <p className="text-red-500 text-sm">{state.errors.password}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="appsecrete">Appsecrete</Label>
              </div>
              <Input
                id="appsecrete"
                name="appsecrete"
                type="text"
                placeholder="Enter the secrete number"
              />
              {state?.errors?.appsecrete && (
                <p className="text-red-500 text-sm">
                  {state.errors.appsecrete}
                </p>
              )}
            </div>
            <Button type="submit" disabled={pending} className="w-full">
              Creat Account
            </Button>
            <Link
              href="#"
              className="inline-block text-sm underline text-center"
            >
              Alreay have account? Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default SignupForm;
