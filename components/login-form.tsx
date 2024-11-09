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
import { loginAction } from "@/app/actions/auth";

const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, undefined);

  return (
    <form action={action}>
      <Card className="mx-auto max-w-sm w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your login credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="m@example.com"
              />
            </div>
            {state?.errors?.username && (
              <p className="text-red-500 text-sm">{state.errors.username}</p>
            )}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" />
              {state?.errors?.password && (
                <p className="text-red-500 text-sm">{state.errors.password}</p>
              )}
            </div>
            <Button type="submit" disabled={pending} className="w-full">
              Login
            </Button>
            <Link
              href="#"
              className="inline-block text-sm underline text-center"
            >
              Forgot your password?
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default LoginForm;
