"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BlogCard } from "./blog-card";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.projexia.in/api/v1";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImageUrl: string | null;
  authorName: string;
  publishedAt: string;
  categories: Category[];
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export function BlogListing() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || "1");
  const currentCategory = searchParams.get("category") || "";

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${API_URL}/public/blog/categories`);
        if (!res.ok) return;
        const json = await res.json();
        if (json.success) {
          setCategories(json.data);
        }
      } catch {
        // Categories are optional, fail silently
      }
    }
    fetchCategories();
  }, []);

  // Fetch posts when page or category changes
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      params.set("page", String(currentPage));
      params.set("limit", "12");
      if (currentCategory) {
        params.set("category", currentCategory);
      }

      const res = await fetch(
        `${API_URL}/public/blog/posts?${params.toString()}`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const json = await res.json();
      if (json.success) {
        setPosts(json.data);
        setPagination(json.pagination);
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch {
      setError("Unable to load blog posts. Please try again later.");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, currentCategory]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    }
    const qs = params.toString();
    router.push(qs ? `/blog?${qs}` : "/blog", { scroll: false });
  }

  function handleCategoryChange(slug: string) {
    updateParams({ category: slug || null, page: null });
  }

  function handlePageChange(page: number) {
    updateParams({ page: page > 1 ? String(page) : null });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const featuredPost = currentPage === 1 && !currentCategory ? posts[0] : null;
  const gridPosts = featuredPost ? posts.slice(1) : posts;

  return (
    <div>
      {/* Category filter pills */}
      {categories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => handleCategoryChange("")}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              !currentCategory
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                currentCategory === cat.slug
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              )}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden animate-pulse",
                i === 0 && currentPage === 1 && !currentCategory && "md:col-span-3 md:grid md:grid-cols-2"
              )}
            >
              <div
                className={cn(
                  "bg-slate-100 dark:bg-slate-800",
                  i === 0 && currentPage === 1 && !currentCategory
                    ? "aspect-[16/9] md:aspect-auto md:min-h-[320px]"
                    : "aspect-[16/10]"
                )}
              />
              <div className="p-5 space-y-3">
                <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded-full" />
                <div className="h-5 w-3/4 bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-slate-500 dark:text-slate-400">{error}</p>
          <button
            onClick={fetchPosts}
            className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          >
            Try again
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
            No posts found
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {currentCategory
              ? "No posts in this category yet. Try a different one."
              : "Check back soon for new content."}
          </p>
          {currentCategory && (
            <button
              onClick={() => handleCategoryChange("")}
              className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              View all posts
            </button>
          )}
        </div>
      )}

      {/* Posts grid */}
      {!loading && !error && posts.length > 0 && (
        <>
          {/* Featured post */}
          {featuredPost && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <BlogCard post={featuredPost} featured index={0} />
            </div>
          )}

          {/* Rest of posts */}
          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={featuredPost ? i + 1 : i}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <nav
              className="mt-16 flex items-center justify-center gap-1"
              aria-label="Blog pagination"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  currentPage <= 1
                    ? "text-slate-300 dark:text-slate-600 cursor-not-allowed"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                )}
              >
                Previous
              </button>

              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  // Show first, last, and pages near current
                  if (page === 1 || page === pagination.totalPages) return true;
                  if (Math.abs(page - currentPage) <= 1) return true;
                  return false;
                })
                .reduce<(number | "ellipsis")[]>((acc, page, i, arr) => {
                  if (i > 0) {
                    const prev = arr[i - 1];
                    if (page - prev > 1) {
                      acc.push("ellipsis");
                    }
                  }
                  acc.push(page);
                  return acc;
                }, [])
                .map((item, i) =>
                  item === "ellipsis" ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="px-2 text-slate-400 dark:text-slate-600"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => handlePageChange(item)}
                      className={cn(
                        "min-w-[36px] h-9 px-3 rounded-lg text-sm font-medium transition-colors",
                        item === currentPage
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                      )}
                    >
                      {item}
                    </button>
                  )
                )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= (pagination?.totalPages || 1)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  currentPage >= (pagination?.totalPages || 1)
                    ? "text-slate-300 dark:text-slate-600 cursor-not-allowed"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                )}
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
