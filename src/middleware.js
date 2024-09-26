import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // const res = await checkClientAuth();
  // console.log("Middleware: Recieved Response");
  // if(!res.status){
  //   return NextResponse.redirect(new URL('/main', request.url))
  // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/']
}