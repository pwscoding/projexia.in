import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/landing/page-hero";
import { BlogListing } from "@/components/landing/blog-listing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and updates from the Projexia team. Learn about project management, client collaboration, and agency growth.",
  alternates: { canonical: "https://projexia.in/blog" },
  openGraph: {
    title: "Blog – Projexia",
    description:
      "Insights, tutorials, and updates from the Projexia team. Learn about project management, client collaboration, and agency growth.",
    url: "https://projexia.in/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        label="Blog"
        title="Insights for modern agencies"
        description="Practical advice on project management, client collaboration, and growing your agency — straight from the Projexia team."
      />

      <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Suspense>
            <BlogListing />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
