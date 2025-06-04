import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCardWrapper from '@/components/auth/AuthCardWrapper';
import LoginForm from '@/components/auth/LoginForm';
// Assuming LoginFormValues is exported from LoginForm.tsx or defined here based on its schema
// For this example, we'll infer props. If LoginFormValues is specific, it should be imported.
// type LoginFormValues = { email: string; password: string }; // Placeholder if not exported

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleLogin = async (values: { email: string; password: string }) => {
    console.log('Login attempt with:', values);
    setIsPending(true);
    setErrorMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Replace with actual authentication logic
    if (values.email === 'user@example.com' && values.password === 'password123') {
      console.log('Login successful');
      navigate('/dashboard');
    } else {
      console.log('Login failed');
      setErrorMessage('Invalid email or password. Please try again.');
    }
    setIsPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4">
      <AuthCardWrapper
        headerLabel="Welcome Back! Please Login"
        backButtonLabel="Forgot Password?"
        backButtonHref="/forgot-password"
      >
        <LoginForm
          onSubmit={handleLogin}
          isPending={isPending}
          errorMessage={errorMessage}
        />
      </AuthCardWrapper>
    </div>
  );
};

export default LoginPage;