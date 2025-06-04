import React, { useState } from 'react';
import AuthCardWrapper from '@/components/auth/AuthCardWrapper';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
// type ForgotPasswordFormValues = { email: string }; // Placeholder if not exported

const ForgotPasswordPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  console.log('ForgotPasswordPage loaded');

  const handleForgotPassword = async (values: { email: string }) => {
    console.log('Forgot password request for:', values);
    setIsPending(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Replace with actual forgot password logic
    if (values.email === 'known@example.com' || values.email === 'user@example.com') {
      console.log('Forgot password email sent (simulated)');
      setSuccessMessage('If an account with that email exists, a password reset link has been sent.');
    } else {
      console.log('Forgot password email not found (simulated)');
      // For security, often the same message is shown whether email exists or not
      setSuccessMessage('If an account with that email exists, a password reset link has been sent.');
      // Or, if you want to show an error for unknown emails (less common):
      // setErrorMessage('No account found with that email address.');
    }
    setIsPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4">
      <AuthCardWrapper
        headerLabel="Reset Your Password"
        backButtonLabel="Back to Login"
        backButtonHref="/login"
      >
        <ForgotPasswordForm
          onSubmit={handleForgotPassword}
          isPending={isPending}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </AuthCardWrapper>
    </div>
  );
};

export default ForgotPasswordPage;