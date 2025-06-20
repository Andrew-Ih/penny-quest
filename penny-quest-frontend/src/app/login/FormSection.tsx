import LoginFormDisplay from './components/display/loginFormDisplay';
import AuthForm from './components/AuthForm';
import { useAuthForm } from './hooks/useAuthForm';

export default function FormSection() {
  const { isSignUp, handleSubmit, toggleMode, loginFields, signUpFields } = useAuthForm();
  const fields = isSignUp ? signUpFields : loginFields;

  return (
    <LoginFormDisplay>
      <AuthForm
        isSignUp={isSignUp}
        fields={fields}
        onSubmit={handleSubmit}
        onToggleMode={toggleMode}
      />
    </LoginFormDisplay>
  );
}

