export default async (request: Request, context: any) => {
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
};
