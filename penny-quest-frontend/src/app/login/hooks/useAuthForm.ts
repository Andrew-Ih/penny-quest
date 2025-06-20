import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  const toggleMode = () => setIsSignUp(!isSignUp);

  const loginFields = [
    { type: 'text', placeholder: 'Email Address / Username', required: true },
    { type: 'password', placeholder: 'Password', required: true }
  ];

  const signUpFields = [
    { type: 'grid', placeholder: '', required: true },
    { type: 'email', placeholder: 'Email Address', required: true },
    { type: 'text', placeholder: 'Username', required: true },
    { type: 'password', placeholder: 'Password', required: true },
    { type: 'password', placeholder: 'Confirm Password', required: true }
  ];

  return {
    isSignUp,
    handleSubmit,
    toggleMode,
    loginFields,
    signUpFields
  };
};