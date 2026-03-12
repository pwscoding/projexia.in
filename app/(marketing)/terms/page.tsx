import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Projexia",
  description: "Terms of Service for Projexia — the all-in-one project management platform for agencies.",
};

const lastUpdated = "March 12, 2026";

export default function TermsPage() {
  return (
    <main className="pt-40 pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Please read these terms carefully before using Projexia.
          </p>
        </header>

        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Projexia (&quot;the Service&quot;), operated by Projexia (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
          <p>
            These terms apply to all users of the Service, including agency owners, team members, and client portal users.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Projexia is an all-in-one project management platform designed for agencies. The Service includes but is not limited to:
          </p>
          <ul>
            <li>Project and task management</li>
            <li>Client portal with approvals, invoicing, and messaging</li>
            <li>Team member portal with time tracking and task management</li>
            <li>File management and sharing</li>
            <li>Invoicing and payment processing</li>
            <li>Reporting and analytics</li>
          </ul>

          <h2>3. Account Registration</h2>
          <p>
            To use the Service, you must create an account and provide accurate, complete information. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p>
            You must be at least 18 years old to create an account. By registering, you represent that you have the legal authority to bind your organization to these terms.
          </p>

          <h2>4. Subscription Plans & Billing</h2>
          <p>
            Projexia offers both free and paid subscription plans. By selecting a paid plan, you agree to pay the applicable fees. Key billing terms:
          </p>
          <ul>
            <li>Paid plans are billed on a monthly or annual basis as selected</li>
            <li>All fees are non-refundable unless otherwise stated</li>
            <li>We reserve the right to change pricing with 30 days&apos; notice</li>
            <li>Downgrading your plan may result in loss of access to certain features</li>
          </ul>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Upload or transmit viruses, malware, or harmful code</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Use automated systems to access the Service without permission</li>
            <li>Impersonate any person or entity</li>
            <li>Upload content that infringes intellectual property rights</li>
          </ul>

          <h2>6. Data Ownership & Intellectual Property</h2>
          <p>
            You retain all rights to the data and content you upload to Projexia (&quot;Your Content&quot;). By using the Service, you grant us a limited license to process, store, and display Your Content solely for the purpose of providing the Service.
          </p>
          <p>
            Projexia and its original content, features, and functionality are owned by us and are protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h2>7. Data Protection & Privacy</h2>
          <p>
            Your privacy is important to us. Our collection and use of personal information is governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by reference.
          </p>
          <p>
            We implement industry-standard security measures including 256-bit encryption, secure data centers, and regular security audits to protect your data.
          </p>

          <h2>8. Service Availability</h2>
          <p>
            We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or security purposes. We will provide reasonable notice for planned downtime.
          </p>

          <h2>9. Termination</h2>
          <p>
            You may cancel your account at any time from your account settings. Upon cancellation:
          </p>
          <ul>
            <li>Your access to the Service will continue until the end of your current billing period</li>
            <li>Your data will be retained for 30 days, after which it will be permanently deleted</li>
            <li>You may export your data before deletion</li>
          </ul>
          <p>
            We may suspend or terminate your account if you violate these terms, with or without prior notice.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Projexia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.
          </p>
          <p>
            Our total liability shall not exceed the amount you have paid us in the 12 months preceding the claim.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Projexia, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
          </p>

          <h2>12. Modifications to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of significant changes via email or an in-app notification. Continued use of the Service after changes constitutes acceptance of the revised Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@projexia.in</li>
            <li>Contact page: <a href="/contact">projexia.in/contact</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
