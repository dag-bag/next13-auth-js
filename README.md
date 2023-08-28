## Setup
> pnpm install
> setup .env
> pnpm dev

## Steps 
> NextAuth with MongoDB(mongoose) + Server Actions
Features : 
SignIn with OAuth ( Google )
SignIn with Credentials ( Email, Password )
SignUp with Name, Email, Password
Verify Email
Update Profile
Change Password
Forgot Password
Middleware to secure certain pages

## Guild
>
1. 
    Create next App
2. 
- next.config:
  experimental:{
    serverActions: true
  }
3. Install Packages and Lib
- pnpm i mongoose next-auth bcrypt jsonwebtoken nodemailer
(prettie, eslint optional)

4. 
Create .env (with help of example.env)
NEXTAUTH_SECRET=YOUR_SECRET ( openssl rand -base64 32 )
- Access to Google Cloud Console to get ( GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET )

https://console.cloud.google.com/
create a new project
APIs & Services => Credentials => CREATE CREDENTIALS => OAuth client ID => Web application => Authorized JavaScript origins ( http://localhost:3000 ) => Authorized redirect URIs ( http://localhost:3000/api/auth/callback/google )
5. 
Config Next-Auth - context => Provider 
- app/api/auth/[...nextauth]/route.js 
6.
Create Components
Header Component and Pages - Protected (client, server) - Profile (client, server) - Signin, SignUp - Admin Dashboard
7.
SignIn with Oauth ( Google ) without Database - Import GoogleProvider 
8.
SignOut and Middleware keep the site protected - SignOut component - Middleware
export {default} from 'next-auth/middleware'
export const config = { matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"] }

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
