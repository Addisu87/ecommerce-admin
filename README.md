This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Cloning the repository

```bash
https://github.com/Addisu87/ecommerce-admin.git
```

## Connect to PlanetScale and Push Prisma

```bash
npx prisma generate
npx prisma db push
```

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Key Features

- Shadcn UI for Admin
- Admin dashboard serve as both CMS, Admin and API
- Control multiple vendoros via single CMS
- CRUD Billboards and can use them standalone and our admin generate API for all cases.
- CRUD operations for categories, products.
- CRUD filters(variants) like Color and Size.
- Search through categories, products, sizes, colors, billboards with include pagination
- Control products are "featured" to show on the homepage
- Able to see orders, sales, etc.
- Show graphs of your revenue etc.
- Add Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
