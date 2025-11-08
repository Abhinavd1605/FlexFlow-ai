import { LegalLayout } from '@/components/legal/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout 
      title="Cookie Policy" 
      lastUpdated="November 8, 2025"
    >
      <section className="mb-12">
        <p className="mb-4">
          This Cookie Policy explains how FlexFlow AI uses cookies and similar technologies to recognize 
          you when you visit our website. It explains what these technologies are and why we use them.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. What are cookies?</h2>
        <p className="mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a 
          website. They are widely used to make websites work more efficiently and to provide reporting 
          information.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. How we use cookies</h2>
        <p className="mb-4">We use cookies for several purposes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>To keep you signed in</li>
          <li>To understand how you use our website</li>
          <li>To improve your experience</li>
          <li>To serve targeted advertisements</li>
          <li>To analyze website traffic</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Types of cookies we use</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-2">Essential Cookies</h3>
        <p className="mb-4">
          These cookies are necessary for the website to function and cannot be switched off.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Performance Cookies</h3>
        <p className="mb-4">
          These cookies allow us to count visits and traffic sources so we can measure and improve the 
          performance of our site.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Functional Cookies</h3>
        <p className="mb-4">
          These enable the website to provide enhanced functionality and personalization.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Targeting Cookies</h3>
        <p className="mb-4">
          These cookies may be set through our site by our advertising partners to build a profile of 
          your interests.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
        <p className="mb-4">
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to 
          reject cookies, you may still use our website though your access to some functionality and 
          areas of our website may be restricted.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by 
          posting the new Cookie Policy on this page.
        </p>
      </section>
    </LegalLayout>
  );
}
