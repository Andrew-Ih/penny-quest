import Form from './form';
import Button from './button';

interface AuthFormProps {
  isSignUp: boolean;
  fields: Array<{ type: string; placeholder: string; required?: boolean }>;
  onSubmit: (e: React.FormEvent) => void;
  onToggleMode: () => void;
}

export default function AuthForm({ isSignUp, fields, onSubmit, onToggleMode }: AuthFormProps) {
  const title = isSignUp ? 'Sign Up' : 'Sign In';
  const subtitle = isSignUp ? 'Create your PennyQuest account' : 'Welcome back to PennyQuest';
  const buttonText = isSignUp ? 'Sign Up' : 'Login';
  const toggleText = isSignUp ? 'Already have an account?' : "Don't have an account?";
  const toggleLinkText = isSignUp ? 'Sign in here' : 'Register here';

  return (
    <>
      <Form
        title={title}
        subtitle={subtitle}
        fields={fields}
        buttonText={buttonText}
        onSubmit={onSubmit}
      />
      <div className="text-center mt-6">
        <p className="text-sm" style={{color: 'var(--text-secondary)'}}>
          {toggleText}{' '}
          <Button variant="secondary" onClick={onToggleMode} className="inline">
            {toggleLinkText}
          </Button>
        </p>
      </div>
    </>
  );
}