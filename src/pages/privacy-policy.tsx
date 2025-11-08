import { LegalLayout } from '@/components/legal/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="November 8, 2025"
    >
      <section className="mb-12">
        <p className="mb-4">
          At FlexFlow AI, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Usage Data: Information about how you use our website and services</li>
          <li>Cookies and Tracking Data: We use cookies and similar tracking technologies</li>
          <li>Audio Data: When you use our voice assistant feature, we process your voice input</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve and personalize your experience</li>
          <li>Process transactions</li>
          <li>Send you updates and marketing communications</li>
          <li>Analyze usage and trends</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information. 
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Your Data Protection Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Access, update, or delete your information</li>
          <li>Object to our processing of your data</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by 
          posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
      </section>
    </LegalLayout>
  );
}
