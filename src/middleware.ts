import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    let currentUser = request.cookies.get('session')?.value;

    if(!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
        return Response.redirect(new URL('/login', request.url))
    }

    if(currentUser && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}