import cookie from "cookie"

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

// The function above accepts a request object and 
// checks the request headers to find the cookie stored.