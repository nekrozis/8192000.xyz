export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "nekrozis-blog.pages.dev") {
      return new Response(
        "Forbidden: Access via the default .pages.dev domain is blocked.",
        {
          status: 403,
          headers: {
            "Content-Type": "text/plain",
            "X-Robots-Tag": "noindex, nofollow",
          },
        },
      );
    }

    return env.ASSETS.fetch(request);
  },
};
