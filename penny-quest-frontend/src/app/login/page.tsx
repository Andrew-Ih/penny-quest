'use client';

import FormSection from "./FormSection";
import WelcomeSection from "./WelcomeSection";

export default function LoginPage() {


  return (
    <div className="min-h-screen flex">
      <WelcomeSection />

      <FormSection />
    </div>
  );
}