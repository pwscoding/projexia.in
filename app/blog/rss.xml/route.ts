const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.projexia.in/api/v1";

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/public/blog/rss`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return new Response("<rss version=\"2.0\"><channel><title>Projexia Blog</title></channel></rss>", {
        status: 200,
        headers: {
          "Content-Type": "application/rss+xml; charset=utf-8",
        },
      });
    }

    const xml = await res.text();

    return new Response(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch {
    return new Response("<rss version=\"2.0\"><channel><title>Projexia Blog</title></channel></rss>", {
      status: 200,
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    });
  }
}
