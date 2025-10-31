import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // For now, we'll handle authentication on the client side
  // This middleware can be enhanced later with proper SSR auth
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};