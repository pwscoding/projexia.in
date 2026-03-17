import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featurePages, getFeatureBySlug } from "@/lib/features";
import { FeaturePage } from "@/components/landing/feature-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return featurePages.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return {
    title: feature.label,
    description: feature.description,
    alternates: { canonical: `/features/${slug}` },
    openGraph: {
      title: `${feature.label} | Projexia`,
      description: feature.description,
    },
  };
}

export default async function FeatureSlugPage({ params }: Props) {
  const { slug } = await params;
  if (!getFeatureBySlug(slug)) notFound();

  return (
    <main>
      <FeaturePage slug={slug} />
    </main>
  );
}
