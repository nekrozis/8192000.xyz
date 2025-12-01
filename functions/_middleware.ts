export const onRequest: PagesFunction = (context) => {
  const url = new URL(context.request.url);

  // If the hostname is the one you want to block/forbid
  if (url.hostname === "nekrozis-blog.pages.dev") {
    // Return the blocking response
    return new Response("Forbidden", { status: 403 });
  }

  // If the hostname is NOT the one you want to block,
  // allow the request to proceed to your deployed website/assets.
  return context.next();
};
