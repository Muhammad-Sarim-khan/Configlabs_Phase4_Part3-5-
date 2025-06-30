import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/webhook"],
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|sign-in|sign-up|favicon.ico).*)",
  ],
};
