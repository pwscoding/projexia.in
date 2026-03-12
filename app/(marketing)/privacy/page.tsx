import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Projexia",
  description: "Privacy Policy for Projexia — how we collect, use, and protect your data.",
};

const lastUpdated = "March 12, 2026";

export default function PrivacyPage() {
  return (
    <main className="pt-40 pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Your privacy matters to us. This policy explains how Projexia collects, uses, and protects your information.
          </p>
        </header>

        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>

          <h3>Information you provide</h3>
          <ul>
            <li><strong>Account information:</strong> Name, email address, organization name, and password when you register</li>
            <li><strong>Profile information:</strong> Job title, phone number, profile photo, and other details you add to your account</li>
            <li><strong>Project data:</strong> Projects, tasks, files, comments, time logs, and other content you create within the Service</li>
            <li><strong>Payment information:</strong> Billing address and payment details (processed securely through our payment provider, Razorpay)</li>
            <li><strong>Communications:</strong> Messages sent through the platform, support tickets, and emails to our team</li>
          </ul>

          <h3>Information collected automatically</h3>
          <ul>
            <li><strong>Usage data:</strong> Pages viewed, features used, actions taken, and time spent on the Service</li>
            <li><strong>Device information:</strong> Browser type, operating system, device type, and screen resolution</li>
            <li><strong>Log data:</strong> IP address, access times, referring URLs, and error logs</li>
            <li><strong>Cookies:</strong> We use cookies and similar technologies as described in our <a href="/cookies">Cookie Policy</a></li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related notifications</li>
            <li>Send you technical notices, updates, and security alerts</li>
            <li>Respond to your support requests and communications</li>
            <li>Monitor and analyze usage trends to improve user experience</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Send promotional communications (with your consent, and you can opt out anytime)</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share your data with:</p>
          <ul>
            <li><strong>Service providers:</strong> Third-party vendors who assist us in operating the Service (hosting, payment processing, analytics, email delivery)</li>
            <li><strong>Within your organization:</strong> Other members of your Projexia workspace can see your profile information and project activity</li>
            <li><strong>Client portal users:</strong> Clients can see project updates, files, and communications shared through the client portal</li>
            <li><strong>Legal requirements:</strong> When required by law, subpoena, or government request</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>4. Data Storage & Security</h2>
          <p>We take the security of your data seriously:</p>
          <ul>
            <li>All data is encrypted in transit using TLS 1.3 (256-bit encryption)</li>
            <li>Data at rest is encrypted using AES-256</li>
            <li>We use secure, SOC 2 compliant cloud infrastructure</li>
            <li>Regular security audits and penetration testing are conducted</li>
            <li>Access to production data is restricted and logged</li>
            <li>We maintain regular encrypted backups</li>
          </ul>
          <p>
            While we implement industry-standard security measures, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2>5. Data Retention</h2>
          <p>We retain your data for as long as your account is active or as needed to provide the Service. Specifically:</p>
          <ul>
            <li><strong>Active accounts:</strong> Data is retained for the duration of your subscription</li>
            <li><strong>Cancelled accounts:</strong> Data is retained for 30 days after cancellation, then permanently deleted</li>
            <li><strong>Backups:</strong> Backup copies may persist for up to 90 days after deletion</li>
            <li><strong>Legal obligations:</strong> Some data may be retained longer if required by law</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Update or correct inaccurate personal data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Export:</strong> Export your data in a machine-readable format</li>
            <li><strong>Restriction:</strong> Request that we limit how we use your data</li>
            <li><strong>Objection:</strong> Object to our processing of your personal data</li>
            <li><strong>Withdraw consent:</strong> Withdraw consent for marketing communications at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us at privacy@projexia.in or through your account settings.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your data may be processed and stored on servers located outside your country of residence. By using the Service, you consent to the transfer of your data to these locations. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or an in-app notification at least 15 days before the changes take effect. The &quot;Last updated&quot; date at the top reflects the most recent revision.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
          <ul>
            <li>Email: privacy@projexia.in</li>
            <li>Contact page: <a href="/contact">projexia.in/contact</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
