import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, LogIn } from 'lucide-react'; // Example icons

const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
  // Add rememberMe if needed: rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => Promise<void> | void;
  isPending?: boolean;
  errorMessage?: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isPending, errorMessage }) => {
  console.log("Rendering LoginForm. Pending:", isPending, "Error:", errorMessage);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = (values: LoginFormValues) => {
    console.log("LoginForm submitted with values:", values);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@example.com" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Optional: Remember me checkbox / Forgot password link directly in form */}
        {/* <div className="flex items-center justify-between">
          <FormField control={form.control} name="rememberMe" render={...} />
          <Button variant="link" size="sm" asChild className="px-0 font-normal">
            <Link to="/forgot-password">Forgot password?</Link>
          </Button>
        </div> */}

        {errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Authentication Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              {/* Consider adding a spinner icon here */}
              <LogIn className="mr-2 h-4 w-4 animate-spin" /> Logging in...
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" /> Login
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;