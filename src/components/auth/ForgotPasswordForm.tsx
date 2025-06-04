import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Mail } from 'lucide-react'; // Example icons

const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof ForgotPasswordSchema>;

interface ForgotPasswordFormProps {
  onSubmit: (values: ForgotPasswordFormValues) => Promise<void> | void;
  isPending?: boolean;
  successMessage?: string | null;
  errorMessage?: string | null;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  isPending,
  successMessage,
  errorMessage,
}) => {
  console.log("Rendering ForgotPasswordForm. Pending:", isPending, "Success:", successMessage, "Error:", errorMessage);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = (values: ForgotPasswordFormValues) => {
    console.log("ForgotPasswordForm submitted with values:", values);
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@example.com" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {successMessage && (
          <Alert variant="default"> {/* Or a "success" variant if you add one */}
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Request Sent</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}

        {errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full" disabled={isPending || !!successMessage}>
          {isPending ? (
            <>
              {/* Consider adding a spinner icon here */}
              <Mail className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
             <>
              <Mail className="mr-2 h-4 w-4" /> Send Reset Link
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;