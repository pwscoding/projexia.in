"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.projexia.in/api/v1";

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

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
  comments: Comment[];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [commentError, setCommentError] = useState<string | null>(null);

  const readingTime = estimateReadingTime(post.content);
  const postUrl = `https://projexia.in/blog/${post.slug}`;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }

  function handleShareTwitter() {
    const text = encodeURIComponent(post.title);
    const url = encodeURIComponent(postUrl);
    window.open(
      `https://x.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function handleCommentSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setCommentError(null);

    try {
      const res = await fetch(
        `${API_URL}/public/blog/posts/${post.slug}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(commentForm),
        }
      );
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit comment");
      }
      setSubmitted(true);
      setCommentForm({ name: "", email: "", content: "" });
    } catch (err) {
      setCommentError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <article className="pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors mb-8"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to blog
          </Link>
        </motion.div>

        {/* Categories */}
        {post.categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-1.5 mb-4"
          >
            {post.categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
        >
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {post.authorName}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
            ·
          </span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
            ·
          </span>
          <span>{readingTime} min read</span>
        </motion.div>

        {/* Featured image */}
        {post.featuredImageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            <img
              src={post.featuredImageUrl}
              alt={post.title}
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-800 prose-pre:bg-slate-50 dark:prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
            Share this article
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.03a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.25 8.81"
                    />
                  </svg>
                  Copy link
                </>
              )}
            </button>
            <button
              onClick={handleShareTwitter}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </button>
          </div>
        </motion.div>

        {/* Comments section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Comments
            {post.comments.length > 0 && (
              <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
                ({post.comments.length})
              </span>
            )}
          </h2>

          {/* Existing comments */}
          {post.comments.length > 0 && (
            <div className="mt-6 space-y-6">
              {post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {comment.name}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {post.comments.length === 0 && (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              No comments yet. Be the first to share your thoughts.
            </p>
          )}

          {/* Comment form */}
          <div className="mt-8">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Leave a comment
            </h3>

            {submitted ? (
              <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-4">
                <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                  Thank you for your comment.
                </p>
                <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                  Your comment is pending moderation and will appear once approved.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="comment-name">Name</Label>
                    <Input
                      id="comment-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={commentForm.name}
                      onChange={(e) =>
                        setCommentForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="comment-email">Email</Label>
                    <Input
                      id="comment-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={commentForm.email}
                      onChange={(e) =>
                        setCommentForm((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      Your email will not be published.
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="comment-content">Comment</Label>
                  <textarea
                    id="comment-content"
                    required
                    rows={4}
                    placeholder="Share your thoughts..."
                    value={commentForm.content}
                    onChange={(e) =>
                      setCommentForm((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                    className={cn(
                      "w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm resize-y",
                      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    )}
                  />
                </div>

                {commentError && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {commentError}
                  </p>
                )}

                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Post Comment"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
