export default {
  async fetch(request) {
    const url = new URL(request.url);
    const destination = new URL(url.pathname + url.search, "https://naitikyadav.pages.dev");
    return Response.redirect(destination.toString(), 301);
  },
};
