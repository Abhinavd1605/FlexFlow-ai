import { LegalLayout } from '@/components/legal/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="Terms of Service" 
      lastUpdated="November 8, 2025"
    >
      <section className="mb-12">
        <p className="mb-4">
          Welcome to FlexFlow AI. By accessing or using our services, you agree to be bound by these 
          Terms of Service. Please read them carefully before using our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Account Registration</h2>
        <p className="mb-4">
          You must provide accurate and complete information when creating an account. You are responsible 
          for maintaining the security of your account credentials.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Use our services for any illegal purpose</li>
          <li>Interfere with or disrupt the services</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Use our services to transmit any malicious code or content</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          All content and materials available on our website and services, including but not limited to 
          text, graphics, logos, and software, are our property or the property of our licensors.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall FlexFlow AI be liable for any indirect, incidental, special, consequential, 
          or punitive damages arising out of or in connection with your use of our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your account and access to our services immediately, without prior 
          notice, for conduct that we believe violates these Terms.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of any changes 
          by posting the updated Terms on our website.
        </p>
      </section>
    </LegalLayout>
  );
}
