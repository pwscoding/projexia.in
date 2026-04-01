import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/landing/json-ld";
import { BlogPostContent } from "@/components/landing/blog-post-content";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.projexia.in/api/v1";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featuredImageUrl: string | null;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
  categories: { id: string; name: string; slug: string }[];
  comments: {
    id: string;
    name: string;
    content: string;
    createdAt: string;
  }[];
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/public/blog/posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success) return null;
    return json.data;
  } catch {
    return null;
  }
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read "${post.title}" on the Projexia blog.`,
    alternates: { canonical: `https://projexia.in/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} – Projexia Blog`,
      description:
        post.excerpt || `Read "${post.title}" on the Projexia blog.`,
      url: `https://projexia.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.authorName],
      ...(post.featuredImageUrl && {
        images: [{ url: post.featuredImageUrl }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt || `Read "${post.title}" on the Projexia blog.`,
      ...(post.featuredImageUrl && {
        images: [post.featuredImageUrl],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImageUrl,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    publisher: {
      "@type": "Organization",
      name: "Projexia",
      url: "https://projexia.in",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://projexia.in/blog/${post.slug}`,
    },
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <BlogPostContent post={post} />
    </main>
  );
}
