import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRouter = createRouteMatcher([
  "/bookings(.*)",
  "/checkout(.*)",
  "/favorites(.*)",
  "/profiles(.*)",
  "rentals(.*)",
  "/reviwes(.*)",
]);
export default clerkMiddleware((auth, req) => {
  if (isProtectedRouter(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
