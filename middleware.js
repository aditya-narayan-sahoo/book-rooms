import { NextResponse } from "next/server";
import checkAuth from "./app/actions/checkAuth";

export async function middleware(request) {
  try {
    const { isAuthenticated } = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
}
export const config = {
  matcher: ["/bookings"],
};
