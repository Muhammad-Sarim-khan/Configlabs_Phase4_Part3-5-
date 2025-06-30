const { clerkMiddleware } = require('@clerk/nextjs/server');

module.exports = clerkMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook"],
});

module.exports.config = {
  matcher: [
    "/((?!_next|.*\\..*|sign-in|sign-up|favicon.ico).*)",
  ],
};
