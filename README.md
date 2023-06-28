This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


I have a Nextjs 13 frontend (app router) where I'm trying to redirect a user, who successfully logged in with email+password, to a dashboard page, which is secured with the `withAuth` middleware. I do not want a page reload but a client-side route change, so I am using the `redirect: false` option for the sign in function, and I have also set a callback url:

```
const response = await signIn( 'credentials', {
   email: data.email,
   password: data.password,
   callbackUrl: '/dashboard',
   redirect: false 
})

if( response.error ) {
   // handle error
}

router.push( response.url )
```

I have an issue with the following scenario: 

1) A non-logged in user visits the dashboard page; 
2) The dashboard page, being secured via middleware, redirects him to the login page (with the dashboard url appended); 
3) The user logs in
4) The login page redirects to itself instead of redirecting to `/dashboard`

Everything "works" if I remove the middleware and unsecure the dashboard; by the way, I have the same issue if I protect the dashboard page with `getServerSession` rather than the middleware. I have read other similar issues but the solution there was to add a callback url, which I have already done. 

I have created a minimal reproduction, I would appreciate any help! 
