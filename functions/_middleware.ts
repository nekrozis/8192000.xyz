export const onRequest: PagesFunction = ({ request }) => {
  const url = new URL(request.url);

  if (url.hostname === "nekrozis-blog.pages.dev") {
    return new Response("Forbidden", { status: 403 });
  }
};
