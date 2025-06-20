'use client';

import FormSection from "./FormSection";
import WelcomePage from "./WelcomePage";

export default function LoginPage() {


  return (
    <div className="min-h-screen flex">
      <WelcomePage />

      <FormSection />
    </div>
  );
}