import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Projexia",
  description: "Cookie Policy for Projexia — how we use cookies and similar technologies.",
};

const lastUpdated = "March 12, 2026";

export default function CookiePolicyPage() {
  return (
    <main className="pt-40 pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-12">
          <p className="text-sm font-medium text-slate-500 mb-2">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Cookie Policy
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            This policy explains how Projexia uses cookies and similar technologies.
          </p>
        </header>

        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are required for the Service to function properly. They cannot be disabled. They include:
          </p>
          <ul>
            <li><strong>Authentication cookies:</strong> Keep you signed in and maintain your session (accessToken, refreshToken)</li>
            <li><strong>Security cookies:</strong> Help detect and prevent security threats like CSRF attacks</li>
            <li><strong>Preference cookies:</strong> Remember your language, theme, and display settings</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with the Service. They collect anonymized data about page views, feature usage, and navigation patterns. We use this data to improve the Service.
          </p>
          <ul>
            <li><strong>Usage tracking:</strong> Pages visited, features used, and time spent</li>
            <li><strong>Performance monitoring:</strong> Page load times and error rates</li>
          </ul>

          <h3>Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization:
          </p>
          <ul>
            <li><strong>UI preferences:</strong> Sidebar collapsed state, table sort order, view preferences</li>
            <li><strong>Tour completion:</strong> Whether you&apos;ve completed the onboarding tour</li>
            <li><strong>Notification preferences:</strong> Your notification and alert settings</li>
          </ul>

          <h2>3. How Long Cookies Last</h2>
          <ul>
            <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 30 days for authentication, up to 1 year for preferences)</li>
          </ul>

          <h2>4. Third-Party Cookies</h2>
          <p>We may use cookies from the following third-party services:</p>
          <ul>
            <li><strong>Razorpay:</strong> For secure payment processing</li>
            <li><strong>Analytics providers:</strong> For anonymized usage analytics</li>
          </ul>
          <p>
            These third parties have their own privacy and cookie policies. We recommend reviewing their policies for more information.
          </p>

          <h2>5. Managing Cookies</h2>
          <p>You can control cookies through your browser settings:</p>
          <ul>
            <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
            <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies</li>
            <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
            <li><strong>Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
          </ul>
          <p>
            Please note that disabling essential cookies may prevent the Service from functioning properly.
          </p>

          <h2>6. Local Storage</h2>
          <p>
            In addition to cookies, we use browser local storage to save certain preferences and settings. This data is stored locally on your device and is not transmitted to our servers. You can clear local storage through your browser&apos;s developer tools.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be reflected by the &quot;Last updated&quot; date at the top of this page. Significant changes will be communicated via email or in-app notification.
          </p>

          <h2>8. Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <ul>
            <li>Email: privacy@projexia.in</li>
            <li>Contact page: <a href="/contact">projexia.in/contact</a></li>
          </ul>
        </div>
      </article>
    </main>
  );
}
