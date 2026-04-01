"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImageUrl: string | null;
  authorName: string;
  publishedAt: string;
  categories: { id: string; name: string; slug: string }[];
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group relative",
        featured && "md:col-span-3"
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5",
          featured
            ? "md:grid md:grid-cols-2 md:gap-0"
            : "flex flex-col"
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative overflow-hidden bg-slate-100 dark:bg-slate-800",
            featured
              ? "aspect-[16/9] md:aspect-auto md:min-h-[320px]"
              : "aspect-[16/10]"
          )}
        >
          {post.featuredImageUrl ? (
            <img
              src={post.featuredImageUrl}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-indigo-950/30 dark:to-slate-800 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-slate-300 dark:text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={cn(
            "flex flex-col",
            featured ? "p-6 md:p-8 md:justify-center" : "p-5"
          )}
        >
          {/* Categories */}
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.categories.map((cat) => (
                <span
                  key={cat.id}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2
            className={cn(
              "font-semibold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",
              featured ? "text-xl md:text-2xl" : "text-lg"
            )}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p
              className={cn(
                "mt-2 text-slate-600 dark:text-slate-400 leading-relaxed",
                featured
                  ? "text-sm md:text-base line-clamp-3"
                  : "text-sm line-clamp-2"
              )}
            >
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
            <span className="font-medium text-slate-700 dark:text-slate-300">
              {post.authorName}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
              ·
            </span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          {/* Read more */}
          <span
            className={cn(
              "mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all",
              featured && "md:mt-6"
            )}
          >
            Read more
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
