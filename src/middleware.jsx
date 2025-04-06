import { NextResponse } from 'next/server'

export function middleware(request) {
  const theme = request.cookies.get('danangsetiadi-theme-mode')?.value || 'light'

  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('x-theme', theme)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  return response
}