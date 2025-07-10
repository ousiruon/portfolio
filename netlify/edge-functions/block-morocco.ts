export default async (request: Request, context: any) => {
  try {
    const country = context.geo?.country?.toUpperCase();
    if (country === "MA") {
      return new Response(
        "Access Denied: This site is not available in Morocco.",
        {
          status: 403,
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
    }
    return context.next();
  } catch (error) {
    // Log error if possible (Netlify logs)
    return new Response("Internal Server Error in Edge Function", {
      status: 500,
    });
  }
};
