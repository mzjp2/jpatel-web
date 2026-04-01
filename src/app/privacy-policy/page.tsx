import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Jeff Patel Optometrist — how we collect, use and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold uppercase text-white">Privacy Policy</h1>
          <p className="mt-3 text-white/50 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-primary">
            <p>
              Jeff Patel Optometrist (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
              protecting your personal data and respecting your privacy. This
              Privacy Policy explains how we collect, use, store and protect your
              personal information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul>
              <li>
                <strong>Identity data:</strong> Name, date of birth, gender.
              </li>
              <li>
                <strong>Contact data:</strong> Email address, phone number, postal address.
              </li>
              <li>
                <strong>Health data:</strong> Eye examination records, prescriptions, and clinical notes. This is special category data under the Data Protection Act.
              </li>
              <li>
                <strong>Transaction data:</strong> Purchase history, payment details (we do not store full card details).
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you use our website, gathered through cookies and analytics tools.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide optometry services and eye care treatment.</li>
              <li>Process and fulfil orders placed through our online shop.</li>
              <li>Manage appointments and send reminders.</li>
              <li>Communicate with you about your treatment and orders.</li>
              <li>Send marketing communications where you have consented to receive them.</li>
              <li>Improve our website and services through analytics.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>

            <h2>3. Legal Basis for Processing</h2>
            <p>
              We process your personal data on the following legal bases: performance of a contract (where processing is necessary to provide our services), compliance with a legal obligation, your consent (for marketing communications and special category health data), and our legitimate interests (such as improving our services and preventing fraud).
            </p>

            <h2>4. Data Sharing</h2>
            <p>We do not sell or rent your personal data to third parties. We may share your data with:</p>
            <ul>
              <li>Our payment processor (Blink) to process transactions securely.</li>
              <li>Our stock management system (Smart Applications) for order fulfilment.</li>
              <li>Lens and frame manufacturers when placing orders for your products.</li>
              <li>Referring healthcare professionals where clinically necessary.</li>
              <li>Regulatory authorities where required by law.</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain clinical records for a minimum of 7 years from the date of your last appointment, in accordance with the requirements of the Mauritius Medical Council and Data Protection Act. Transaction records are kept for 7 years for accounting purposes. Marketing consent records are retained until you withdraw consent.
            </p>

            <h2>6. Your Rights</h2>
            <p>Under the Mauritius Data Protection Act 2017, you have the right to:</p>
            <ul>
              <li>Access your personal data.</li>
              <li>Correct inaccurate data.</li>
              <li>Request erasure (subject to our legal obligations).</li>
              <li>Restrict or object to processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent for marketing at any time.</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Our website uses essential cookies necessary for its operation, analytics cookies (with your consent) to understand how visitors use our site, and preference cookies to remember your settings. You can manage your cookie preferences through your browser settings.
            </p>

            <h2>8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction or alteration. Our website uses HTTPS encryption and our payment processing is handled by PCI-DSS compliant providers.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
            </p>
            <p>
              <strong>Jeff Patel Optometrist</strong>
              <br />
              Arcade Dookun, Saint Jean Road, Quatre-Bornes, Mauritius
              <br />
              Email: privacy@jeffpatel.com
              <br />
              Tel: +230 454 9000
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website and, where appropriate, by email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
